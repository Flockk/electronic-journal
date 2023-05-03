package com.flock.journal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

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

import static com.flock.journal.model.Role.ADMIN;
import static com.flock.journal.model.Role.STUDENT;
import static com.flock.journal.model.Role.TEACHER;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

  private final JwtAuthenticationFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;
  private final LogoutHandler logoutHandler;
  private static final String ADMIN_API_PATTERN = "/api/v1/admin/**";
  private static final String TEACHER_API_PATTERN = "/api/v1/teacher/**";
  private static final String STUDENT_API_PATTERN = "/api/v1/student/**";

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf()
        .disable()
        .authorizeHttpRequests()
        .requestMatchers("/api/v1/auth/**")
        .permitAll()

        .requestMatchers(ADMIN_API_PATTERN).hasRole(ADMIN.name())

        .requestMatchers(GET, ADMIN_API_PATTERN).hasAuthority(ADMIN_READ.name())
        .requestMatchers(POST, ADMIN_API_PATTERN).hasAuthority(ADMIN_CREATE.name())
        .requestMatchers(PUT, ADMIN_API_PATTERN).hasAuthority(ADMIN_UPDATE.name())
        .requestMatchers(DELETE, ADMIN_API_PATTERN).hasAuthority(ADMIN_DELETE.name())

        .requestMatchers(TEACHER_API_PATTERN).hasAnyRole(ADMIN.name(), TEACHER.name())

        .requestMatchers(GET, TEACHER_API_PATTERN)
        .hasAnyAuthority(ADMIN_READ.name(), TEACHER_READ.name())
        .requestMatchers(POST, TEACHER_API_PATTERN)
        .hasAnyAuthority(ADMIN_CREATE.name(), TEACHER_CREATE.name())
        .requestMatchers(PUT, TEACHER_API_PATTERN)
        .hasAnyAuthority(ADMIN_UPDATE.name(), TEACHER_UPDATE.name())
        .requestMatchers(DELETE, TEACHER_API_PATTERN)
        .hasAnyAuthority(ADMIN_DELETE.name(), TEACHER_DELETE.name())

        .requestMatchers(STUDENT_API_PATTERN).hasAnyRole(ADMIN.name(), STUDENT.name())

        .requestMatchers(GET, STUDENT_API_PATTERN)
        .hasAnyAuthority(ADMIN_READ.name(), STUDENT_READ.name())
        .requestMatchers(POST, STUDENT_API_PATTERN)
        .hasAnyAuthority(ADMIN_CREATE.name(), STUDENT_CREATE.name())
        .requestMatchers(PUT, STUDENT_API_PATTERN)
        .hasAnyAuthority(ADMIN_UPDATE.name(), STUDENT_UPDATE.name())
        .requestMatchers(DELETE, STUDENT_API_PATTERN)
        .hasAnyAuthority(ADMIN_DELETE.name(), STUDENT_DELETE.name())

        .anyRequest()
        .authenticated()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        .logout()
        .logoutUrl("/api/v1/auth/logout")
        .addLogoutHandler(logoutHandler)
        .logoutSuccessHandler(
            (request, response, authentication) -> SecurityContextHolder.clearContext()
        )
    ;
    return http.build();
  }
}
