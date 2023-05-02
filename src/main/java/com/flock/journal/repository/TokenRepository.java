package com.flock.journal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.flock.journal.model.Token;

public interface TokenRepository extends JpaRepository<Token, Long> {

  @Query(value = """
      SELECT t FROM Token t  JOIN User u\s
      ON t.user.id = u.id\s
      WHERE u.id = :id AND (t.expired = false OR t.revoked = false)\s
      """)
  List<Token> findAllValidTokensByUser(Long userId);

  Optional<Token> findByToken(String token);
}
