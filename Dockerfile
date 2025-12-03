# 1단계: 빌드
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

# 프로젝트 전체 복사
COPY . .

# Gradle Wrapper에 실행 권한 부여
RUN chmod +x ./gradlew

# Gradle Wrapper로 빌드 (테스트 제외)
RUN ./gradlew clean bootJar -x test

# 2단계: 실행
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# 빌드된 JAR 복사
COPY --from=build /app/build/libs/*.jar app.jar

# Render가 제공하는 포트 환경변수
ENV PORT 8080
EXPOSE $PORT

# Spring Boot 실행
ENTRYPOINT ["sh", "-c", "java -jar app.jar --server.port=$PORT"]
