package com.flock.journal.division.directors;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/divisions/directors")
@PreAuthorize("hasRole('ADMIN')")
public class DirectorController {

  private final DirectorService directorService;

  @Autowired
  public DirectorController(DirectorService directorService) {
    this.directorService = directorService;
  }

  @GetMapping
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<List<Director>> getAllDirectors() {
    List<Director> directors = directorService.getAllDirectors();
    return new ResponseEntity<>(directors, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Director> getDirectorById(@PathVariable("id") Long id) {
    Optional<Director> director = directorService.getDirectorById(id);
    return director.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Director> createDirector(@RequestBody Director director) {
    Director savedDirector = directorService.saveDirector(director);
    return new ResponseEntity<>(savedDirector, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteDirector(@PathVariable("id") Long id) {
    directorService.deleteDirector(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
