package com.flock.journal.user;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private static final Logger log = LogManager.getLogger(UserService.class);
  private final UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public List<User> getAllUsers() {
    log.info("Получение всех пользователей");
    List<User> users = userRepository.findAll();
    log.info("Найдено {} пользователей", users.size());
    return users;
  }

  public List<User> getAllUsersSortedAscending() {
    Sort sort = Sort.by("lastname", "firstname", "patronymic").ascending();
    return userRepository.findAll(sort);
  }

  public List<User> getAllUsersSortedDescending() {
    Sort sort = Sort.by("lastname", "firstname", "patronymic").descending();
    return userRepository.findAll(sort);
  }

  public List<User> searchUsers(String query) {
    return userRepository.findByFirstnameAndLastnameAndPatronymicAndLogin(
        query, query, query, query);
  }

  public Optional<User> getUserById(Long id) {
    return userRepository.findById(id);
  }

  public void deleteUser(Long id) {
    userRepository.deleteById(id);
  }
}
