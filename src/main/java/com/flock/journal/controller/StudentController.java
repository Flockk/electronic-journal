package com.flock.journal.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/student")
public class StudentController {

  @GetMapping
  public String get() {
    return "GET:: student controller";
  }

  @PostMapping
  public String post() {
    return "POST:: student controller";
  }

  @PutMapping
  public String put() {
    return "PUT:: student controller";
  }

  @DeleteMapping
  public String delete() {
    return "DELETE:: student controller";
  }
}
