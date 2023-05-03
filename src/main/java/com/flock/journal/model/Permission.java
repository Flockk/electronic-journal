package com.flock.journal.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

  ADMIN_CREATE("admin:create"),
  ADMIN_READ("admin:read"),
  ADMIN_UPDATE("admin:update"),
  ADMIN_DELETE("admin:delete"),

  TEACHER_CREATE("teacher:create"),
  TEACHER_READ("teacher:read"),
  TEACHER_UPDATE("teacher:update"),
  TEACHER_DELETE("teacher:delete"),

  STUDENT_CREATE("student:create"),
  STUDENT_READ("student:read"),
  STUDENT_UPDATE("student:update"),
  STUDENT_DELETE("student:delete");

  @Getter
  private final String permissionName;
}
