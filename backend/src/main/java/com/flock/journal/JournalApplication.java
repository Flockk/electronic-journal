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

}
