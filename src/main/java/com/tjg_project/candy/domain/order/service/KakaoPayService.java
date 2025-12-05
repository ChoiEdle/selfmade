package com.tjg_project.candy.domain.order.service;

import com.tjg_project.candy.domain.order.dto.KakaoApproveResponse;
import com.tjg_project.candy.domain.order.dto.KakaoReadyResponse;
import com.tjg_project.candy.domain.order.entity.KakaoPay;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.concurrent.ConcurrentHashMap;

@Service
public class KakaoPayService {

    @Value("${kakao.pay.host}") private String KAKAO_PAY_HOST;
    @Value("${kakao.pay.admin-key}") private String ADMIN_KEY;
    @Value("${kakao.pay.cid}") private String CID;
    @Value("${kakao.pay.ready-path}") private String READY_PATH;
    @Value("${kakao.pay.approve-path}") private String APPROVE_PATH;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ConcurrentHashMap<String, String> tidStore = new ConcurrentHashMap<>();
    String user_id = "test";
    private HttpHeaders getHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("Authorization", ADMIN_KEY);
        return headers;
    }

    public KakaoReadyResponse ready(KakaoPay kakaoPay) {
        // (예시) 주문번호는 DB 생성 PK/UUID 사용 권장
        String orderId = kakaoPay.getOrderId(); // null이면 반드시 세팅하고 오세요.
        Long userId = kakaoPay.getId();

        // 1) 요청 바디 (kapi는 Form-URL-Encoded)
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", CID);                                     //가맹점 코드 (테스트용)
        params.add("partner_order_id", orderId);                    // ✅ 꼭 필요!
        params.add("partner_user_id", kakaoPay.getId().toString());
        params.add("item_name", kakaoPay.getItemName());
        params.add("quantity", String.valueOf(kakaoPay.getQty()));  // ✅ 문자열로
        params.add("total_amount", String.valueOf(kakaoPay.getTotalAmount()));
        params.add("tax_free_amount", "0"); // 필요 시 사용

        // 콜백 URL에 orderId를 함께 전달 (승인 단계에서 사용)
        params.add("approval_url", "https://selfmade-umqd.onrender.com/payment/qr/success?orderId=" + orderId);
        params.add("cancel_url",   "https://selfmade-umqd.onrender.com/payment/qr/cancel?orderId=" + orderId);
        params.add("fail_url",     "https://selfmade-umqd.onrender.com/payment/qr/fail?orderId=" + orderId);

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<>(params, getHeaders());

        // 2) API 호출
        try {
            String url = KAKAO_PAY_HOST + "/v1" + READY_PATH; // https://kapi.kakao.com/v1/payment/ready
            KakaoReadyResponse res = restTemplate.postForObject(url, body, KakaoReadyResponse.class);

            // ✅ 결제 준비 성공 시 TID 저장
            tidStore.put(orderId, res.getTid());
//            userIdStore.put(orderId, kakaoPay.getId());

            return res;
        } catch (Exception e) {
            System.err.println("Kakao Pay Ready 실패: " + e.getMessage());
            throw e; // 로깅/예외 처리 전략에 맞게 변환
        }
    }

    public KakaoApproveResponse approve(String orderId, String pgToken) {
        String tid = tidStore.get(orderId);
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", CID);
        params.add("tid", tid);
        params.add("partner_order_id", orderId);
        params.add("partner_user_id", user_id);
        params.add("pg_token", pgToken);

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<>(params, getHeaders());
        String url = KAKAO_PAY_HOST + "/v1" + APPROVE_PATH;

        return restTemplate.postForObject(url, body, KakaoApproveResponse.class);
    }
}
