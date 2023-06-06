package com.flock.journal.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("/*")
@RequestMapping("/api/v1/admin/users")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<User>> getAllUsers() {
    List<User> users = userService.getAllUsers();
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/ascending")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<User>> getAllUsersSortedAscending() {
    List<User> users = userService.getAllUsersSortedAscending();
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/descending")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<User>> getAllUsersSortedDescending() {
    List<User> users = userService.getAllUsersSortedDescending();
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/search")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<User>> searchUsers(@RequestParam("query") String query) {
    List<User> users = userService.searchUsers(query);
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
    Optional<User> user = userService.getUserById(id);
    return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
    userService.deleteUser(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
