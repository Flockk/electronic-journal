package com.flock.journal;

import com.flock.journal.auth.RegisterRequest;
import com.flock.journal.auth.AuthenticationService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import static java.lang.System.out;

import static com.flock.journal.user.Role.ADMIN;
import static com.flock.journal.user.Role.STUDENT;
import static com.flock.journal.user.Role.PROFESSOR;

@SpringBootApplication
public class JournalApplication {

  public static void main(String[] args) {
    SpringApplication.run(JournalApplication.class, args);
  }

  @Bean
  public CommandLineRunner commandLineRunner(AuthenticationService service) {
    return args -> {
      var admin = RegisterRequest.builder()
          .firstname("Admin")
          .lastname("Admin")
          .patronymic("Admin")
          .login("admin@login")
          .password("password")
          .role(ADMIN)
          .build();
      out.println("Admin token: " + service.register(admin).getAccessToken());

      var teacher = RegisterRequest.builder()
          .firstname("Professor")
          .lastname("Professor")
          .patronymic("Professor")
          .login("professor@login")
          .password("password")
          .role(PROFESSOR)
          .build();
      out.println("Professor token: " + service.register(teacher).getAccessToken());

      var student = RegisterRequest.builder()
          .firstname("Student")
          .lastname("Student")
          .patronymic("Student")
          .login("student@login")
          .password("password")
          .role(STUDENT)
          .build();
      out.println("Student token: " + service.register(student).getAccessToken());
    };
  }
}
