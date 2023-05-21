package com.flock.journal.controller;

import java.io.IOException;

import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.flock.journal.auth.AuthenticationRequest;
import com.flock.journal.auth.AuthenticationResponse;
import com.flock.journal.auth.RegisterRequest;
import com.flock.journal.auth.AuthenticationService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

  private final AuthenticationService service;

  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(
      @RequestBody RegisterRequest request
  ) {
    return ResponseEntity.ok(service.register(request));
  }

  @GetMapping("/login")
  public String showLoginForm(Model model) {
    model.addAttribute("loginRequest", new AuthenticationRequest());
    return "index";
  }

  @PostMapping("/login")
  public String authenticate(
      @ModelAttribute AuthenticationRequest request,
      RedirectAttributes redirectAttributes
  ) {
    AuthenticationResponse response = service.authenticate(request);
    redirectAttributes.addFlashAttribute("authenticationResponse", response);
    return "redirect:/grades";
  }

  @PostMapping("/refresh-token")
  public void refreshToken(
      HttpServletRequest request,
      HttpServletResponse response
  ) throws IOException {
    service.refreshToken(request, response);
  }
}