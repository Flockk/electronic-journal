package com.flock.journal.config;

import static com.flock.journal.user.Permission.ADMIN_CREATE;
import static com.flock.journal.user.Permission.ADMIN_DELETE;
import static com.flock.journal.user.Permission.ADMIN_READ;
import static com.flock.journal.user.Permission.ADMIN_UPDATE;
import static com.flock.journal.user.Permission.PROFESSOR_CREATE;
import static com.flock.journal.user.Permission.PROFESSOR_DELETE;
import static com.flock.journal.user.Permission.PROFESSOR_READ;
import static com.flock.journal.user.Permission.PROFESSOR_UPDATE;
import static com.flock.journal.user.Permission.STUDENT_CREATE;
import static com.flock.journal.user.Permission.STUDENT_DELETE;
import static com.flock.journal.user.Permission.STUDENT_READ;
import static com.flock.journal.user.Permission.STUDENT_UPDATE;
import static com.flock.journal.user.Role.ADMIN;
import static com.flock.journal.user.Role.PROFESSOR;
import static com.flock.journal.user.Role.STUDENT;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration implements WebMvcConfigurer {

  private final JwtAuthenticationFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;
  private final LogoutHandler logoutHandler;

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**").allowedOrigins("*");
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .cors().and()
        .csrf()
        .disable()
        .authorizeHttpRequests()
        .requestMatchers(
            "/api/v1/divisions",
            "/api/v1/homeworks",
            "/api/v1/auth/**",
            "/v2/api-docs",
            "/v3/api-docs",
            "/v3/api-docs/**",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui/**",
            "/webjars/**",
            "/swagger-ui.html"
        )
        .permitAll()

        .requestMatchers("/api/v1/admin/**").hasRole(ADMIN.name())

        .requestMatchers(GET, "/api/v1/admin/**").hasAuthority(ADMIN_READ.name())
        .requestMatchers(POST, "/api/v1/admin/**").hasAuthority(ADMIN_CREATE.name())
        .requestMatchers(PUT, "/api/v1/admin/**").hasAuthority(ADMIN_UPDATE.name())
        .requestMatchers(DELETE, "/api/v1/admin/**").hasAuthority(ADMIN_DELETE.name())

        .requestMatchers(POST, "/api/v1/auth/register").hasRole(ADMIN.name())

        .requestMatchers("/api/v1/professor/**").hasRole(PROFESSOR.name())

        .requestMatchers(GET, "/api/v1/professor/**").hasAuthority(PROFESSOR_READ.name())
        .requestMatchers(POST, "/api/v1/professor/**").hasAuthority(PROFESSOR_CREATE.name())
        .requestMatchers(PUT, "/api/v1/professor/**").hasAuthority(PROFESSOR_UPDATE.name())
        .requestMatchers(DELETE, "/api/v1/professor/**").hasAuthority(PROFESSOR_DELETE.name())

        .requestMatchers("/api/v1/student/**").hasRole(STUDENT.name())

        .requestMatchers(GET, "/api/v1/student/**").hasAuthority(STUDENT_READ.name())
        .requestMatchers(POST, "/api/v1/student/**").hasAuthority(STUDENT_CREATE.name())
        .requestMatchers(PUT, "/api/v1/student/**").hasAuthority(STUDENT_UPDATE.name())
        .requestMatchers(DELETE, "/api/v1/student/**").hasAuthority(STUDENT_DELETE.name())

        .anyRequest()
        .authenticated()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        .logout()
        .logoutUrl("/logout")
        .addLogoutHandler(logoutHandler)
        .logoutSuccessHandler(
            (request, response, authentication) -> SecurityContextHolder.clearContext()
        )
    ;
    return http.build();
  }
}
