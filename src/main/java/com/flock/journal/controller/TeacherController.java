package com.flock.journal.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/teacher")
public class TeacherController {

  @GetMapping
  public String get() {
    return "GET:: teacher controller";
  }

  @PostMapping
  public String post() {
    return "POST:: teacher controller";
  }

  @PutMapping
  public String put() {
    return "PUT:: teacher controller";
  }

  @DeleteMapping
  public String delete() {
    return "DELETE:: teacher controller";
  }
}
