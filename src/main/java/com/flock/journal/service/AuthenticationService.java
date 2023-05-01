package com.flock.journal.service;

import org.springframework.stereotype.Service;

import com.flock.journal.model.auth.AuthenticationRequest;
import com.flock.journal.model.auth.AuthenticationResponse;
import com.flock.journal.model.auth.RegisterRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

  public AuthenticationResponse register(RegisterRequest request) {
    return null;
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    return null;
  }
}
