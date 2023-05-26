package com.flock.journal.user;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {

  ADMIN(
      Set.of(
          Permission.ADMIN_CREATE,
          Permission.ADMIN_READ,
          Permission.ADMIN_UPDATE,
          Permission.ADMIN_DELETE,

          Permission.PROFESSOR_CREATE,
          Permission.PROFESSOR_READ,
          Permission.PROFESSOR_UPDATE,
          Permission.PROFESSOR_DELETE,

          Permission.STUDENT_CREATE,
          Permission.STUDENT_READ,
          Permission.STUDENT_UPDATE,
          Permission.STUDENT_DELETE
      )
  ),
  PROFESSOR(
      Set.of(
          Permission.PROFESSOR_CREATE,
          Permission.PROFESSOR_READ,
          Permission.PROFESSOR_UPDATE,
          Permission.PROFESSOR_DELETE
      )
  ),
  STUDENT(
      Set.of(
          Permission.STUDENT_CREATE,
          Permission.STUDENT_READ,
          Permission.STUDENT_UPDATE,
          Permission.STUDENT_DELETE
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
