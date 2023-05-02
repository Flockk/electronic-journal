package com.flock.journal.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.EnumType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tokens")
public class Token {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "token_id")
  private Long id;

  @Column(name = "token_value")
  private String value;

  @Enumerated(EnumType.STRING)
  @Column(name = "token_type")
  private TokenType type;

  @Column(name = "token_expired")
  private boolean expired;

  @Column(name = "token_revoked")
  private boolean revoked;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;
}
