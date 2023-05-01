package com.flock.journal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flock.journal.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByLogin(String login);
}
