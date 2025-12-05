package com.tjg_project.candy.domain.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class IpCheckController {

    @GetMapping("/check-ip")
    public String checkOutboundIp() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            // 외부 IP 확인용 사이트
            String ip = restTemplate.getForObject("https://ifconfig.me", String.class);
            return "Current Outbound IP: " + ip;
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}