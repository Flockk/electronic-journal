package com.flock.journal.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.flock.journal.model.Role;
import com.flock.journal.model.Token;
import com.flock.journal.model.TokenType;
import com.flock.journal.model.User;
import com.flock.journal.model.auth.AuthenticationRequest;
import com.flock.journal.model.auth.AuthenticationResponse;
import com.flock.journal.model.auth.RegisterRequest;
import com.flock.journal.repository.TokenRepository;
import com.flock.journal.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

  private final UserRepository repository;
  private final TokenRepository tokenRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) {
    var user = User.builder()
        .firstname(request.getFirstname())
        .lastname(request.getFirstname())
        .patronymic(request.getPatronymic())
        .login(request.getLogin())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.STUDENT)
        .build();
    var savedUser = repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    saveUserToken(savedUser, jwtToken);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
        .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getLogin(),
            request.getPassword()
        )
    );
    var user = repository.findByLogin(request.getLogin())
        .orElseThrow();
    var jwtToken = jwtService.generateToken(user);
    revokeAllUserTokens(user);
    saveUserToken(user, jwtToken);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
        .build();
  }

  private void revokeAllUserTokens(User user) {
    var validUserTokens = tokenRepository.findAllValidTokensByUser(user.getId());
    if (validUserTokens.isEmpty()) {
      return;
    }
    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });
  }

  private void saveUserToken(User savedUser, String jwtToken) {
    var token = Token.builder()
        .user(savedUser)
        .value(jwtToken)
        .type(TokenType.BEARER)
        .revoked(false)
        .expired(false)
        .build();
    tokenRepository.save(token);
  }
}
