package com.flock.journal.user;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByLogin(String login);

  List<User> findByFirstnameAndLastnameAndPatronymicAndLogin(
      String firstname, String lastname, String patronymic, String login);
}
