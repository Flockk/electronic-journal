package com.flock.journal.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public List<User> getAllUsersSortedAscending() {
    Sort sort = Sort.by("firstname", "lastname", "patronymic").ascending();
    return userRepository.findAll(sort);
  }

  public List<User> getAllUsersSortedDescending() {
    Sort sort = Sort.by("firstname", "lastname", "patronymic").descending();
    return userRepository.findAll(sort);
  }

  public Optional<User> getUserById(Long id) {
    return userRepository.findById(id);
  }

  public void deleteUser(Long id) {
    userRepository.deleteById(id);
  }
}
