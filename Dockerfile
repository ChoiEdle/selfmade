# 1단계: 빌드 (Gradle 포함 이미지 사용)
FROM gradle:8.3.1-jdk21 AS build
WORKDIR /app

# 프로젝트 파일 복사 (권한 설정 포함)
COPY --chown=gradle:gradle . .

# Gradle 빌드 (bootJar 생성, 테스트 스킵)
RUN gradle clean bootJar -x test --no-daemon

# 2단계: 실행 (경량 JDK 이미지 사용)
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# 빌드된 jar 파일 복사
COPY --from=build /app/build/libs/*.jar app.jar

# Render에서 자동으로 할당하는 포트 사용
ENV PORT 8080
EXPOSE $PORT

# Spring Boot 실행
ENTRYPOINT ["sh", "-c", "java -jar app.jar --server.port=$PORT"]
