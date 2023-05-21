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
import static com.flock.journal.user.Role.TEACHER;

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
          .firstname("Teacher")
          .lastname("Teacher")
          .patronymic("Teacher")
          .login("teacher@login")
          .password("password")
          .role(TEACHER)
          .build();
      out.println("Teacher token: " + service.register(teacher).getAccessToken());

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
