package com.flock.journal.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/teacher")
@PreAuthorize("hasAnyRole('ADMIN', 'TEACHER')")
public class TeacherController {

  @GetMapping
  @PreAuthorize("hasAnyAuthority('admin:read', 'teacher:read')")
  public String get() {
    return "GET:: teacher controller";
  }

  @PostMapping
  @PreAuthorize("hasAnyAuthority('admin:create', 'teacher:create')")
  public String post() {
    return "POST:: teacher controller";
  }

  @PutMapping
  @PreAuthorize("hasAnyAuthority('admin:update', 'teacher:update')")
  public String put() {
    return "PUT:: teacher controller";
  }

  @DeleteMapping
  @PreAuthorize("hasAnyAuthority('admin:delete', 'teacher:delete')")
  public String delete() {
    return "DELETE:: teacher controller";
  }
}
