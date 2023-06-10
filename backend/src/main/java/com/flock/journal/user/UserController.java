package com.flock.journal.user;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@PreAuthorize("hasAnyRole('ADMIN', 'PROFESSOR', 'STUDENT')")
public class UserController {

  private static final Logger log = LogManager.getLogger(UserController.class);

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<List<User>> getAllUsers() {
    log.info("Получение всех пользователей");
    List<User> users = userService.getAllUsers();
    log.info("Найдено {} пользователей", users.size());
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/me")
  @PreAuthorize("hasAnyAuthority('admin:read', 'professor:read', 'student:read')")
  public ResponseEntity<User> getCurrentUser() throws NotFoundException {
    User user = userService.getCurrentUser();
    return ResponseEntity.ok(user);
  }

  @GetMapping("/ascending")
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<List<User>> getAllUsersSortedAscending() {
    List<User> users = userService.getAllUsersSortedAscending();
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/descending")
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<List<User>> getAllUsersSortedDescending() {
    List<User> users = userService.getAllUsersSortedDescending();
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/search")
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<List<User>> searchUsers(@RequestParam("query") String query) {
    List<User> users = userService.searchUsers(query);
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
    Optional<User> user = userService.getUserById(id);
    return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("hasAuthority('admin:delete')")
  public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
    userService.deleteUser(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
