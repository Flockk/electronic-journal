package com.flock.journal.token;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TokenRepository extends JpaRepository<Token, Long> {

  @Query(value = """
      SELECT t FROM Token t  INNER JOIN User u\s
      ON t.user.id = u.id\s
      WHERE u.id = :id AND (t.isExpired = false OR t.isRevoked = false)\s
      """)
  List<Token> findAllValidTokensByUser(Long id);

  Optional<Token> findByValue(String value);
}