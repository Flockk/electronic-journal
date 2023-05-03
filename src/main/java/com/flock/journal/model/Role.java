package com.flock.journal.model;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import static com.flock.journal.model.Permission.ADMIN_CREATE;
import static com.flock.journal.model.Permission.ADMIN_DELETE;
import static com.flock.journal.model.Permission.ADMIN_READ;
import static com.flock.journal.model.Permission.ADMIN_UPDATE;

import static com.flock.journal.model.Permission.STUDENT_CREATE;
import static com.flock.journal.model.Permission.STUDENT_DELETE;
import static com.flock.journal.model.Permission.STUDENT_READ;
import static com.flock.journal.model.Permission.STUDENT_UPDATE;

import static com.flock.journal.model.Permission.TEACHER_CREATE;
import static com.flock.journal.model.Permission.TEACHER_DELETE;
import static com.flock.journal.model.Permission.TEACHER_READ;
import static com.flock.journal.model.Permission.TEACHER_UPDATE;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {

  ADMIN(
      Set.of(
          ADMIN_CREATE,
          ADMIN_READ,
          ADMIN_UPDATE,
          ADMIN_DELETE,

          TEACHER_CREATE,
          TEACHER_READ,
          TEACHER_UPDATE,
          TEACHER_DELETE,

          STUDENT_CREATE,
          STUDENT_READ,
          STUDENT_UPDATE,
          STUDENT_DELETE
      )
  ),
  TEACHER(
      Set.of(
          TEACHER_CREATE,
          TEACHER_READ,
          TEACHER_UPDATE,
          TEACHER_DELETE
      )
  ),
  STUDENT(
      Set.of(
          STUDENT_CREATE,
          STUDENT_READ,
          STUDENT_UPDATE,
          STUDENT_DELETE
      )
  );

  @Getter
  private final Set<Permission> permissions;

  public List<SimpleGrantedAuthority> getAuthorities() {
    var authorities = getPermissions()
        .stream()
        .map(permission -> new SimpleGrantedAuthority(permission.getPermissionName()))
        .collect(Collectors.toList());
    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
    return authorities;
  }
}
