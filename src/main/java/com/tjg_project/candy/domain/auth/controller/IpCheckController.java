package com.tjg_project.candy.domain.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@RestController
public class IpCheckController {

    @GetMapping("/check-ip")
    public String checkOutboundIp() {
        StringBuilder output = new StringBuilder();
        try {
            // 외부 서비스(ifconfig.me)를 호출하여 서버 IP 가져오기
            Process process = Runtime.getRuntime().exec("curl -s ifconfig.me");
            process.waitFor();

            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line);
                }
            }
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }

        return "Current Outbound IP: " + output.toString();
    }
}
