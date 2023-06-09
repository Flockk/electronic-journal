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

//  @Bean
//  public CommandLineRunner commandLineRunner(AuthenticationService service) {
//    return args -> {
//      var admin = RegisterRequest.builder()
//          .firstname("Иван")
//          .lastname("Иванов")
//          .patronymic("")
//          .login("admin@login")
//          .password("pass")
//          .role(ADMIN)
//          .build();
//      out.println("Токен администратора: " + service.register(admin).getAccessToken());
//
//      var professor = RegisterRequest.builder()
//          .firstname("Сергей")
//          .lastname("Сотников")
//          .patronymic("Викторович")
//          .login("professor@login")
//          .password("pass")
//          .role(PROFESSOR)
//          .build();
//      out.println("Токен преподавателя: " + service.register(professor).getAccessToken());
//
//      var student = RegisterRequest.builder()
//          .firstname("Максим")
//          .lastname("Елушев")
//          .patronymic("Андреевич")
//          .login("student@login")
//          .password("pass")
//          .role(STUDENT)
//          .build();
//      out.println("Токен студента: " + service.register(student).getAccessToken());
//    };
//  }
}
