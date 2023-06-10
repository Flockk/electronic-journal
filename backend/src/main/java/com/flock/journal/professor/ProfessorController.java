package com.flock.journal.professor;

import com.flock.journal.group.Group;
import com.flock.journal.user.UserService;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/professors")
@PreAuthorize("hasAnyRole('ADMIN', 'PROFESSOR')")
public class ProfessorController {

  private final UserService userService;
  private final ProfessorService professorService;

  @Autowired
  public ProfessorController(UserService userService, ProfessorService professorService) {
    this.userService = userService;
    this.professorService = professorService;
  }

  @GetMapping
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<List<Professor>> getAllProfessors() {
    List<Professor> professors = professorService.getAllProfessors();
    return new ResponseEntity<>(professors, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Professor> getProfessorById(@PathVariable("id") Long id) {
    Optional<Professor> professor = professorService.getProfessorById(id);
    return professor.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/me")
  @PreAuthorize("hasAuthority('professor:read')")
  public ResponseEntity<Professor> getCurrentProfessor() throws NotFoundException {
    Professor professor = userService.getCurrentProfessor();
    return ResponseEntity.ok(professor);
  }

  @GetMapping("/{professorId}/groups")
  @PreAuthorize("hasAnyAuthority('admin:read', 'professor:read')")
  public ResponseEntity<List<Group>> getGroupsByProfessorId(
      @PathVariable("professorId") Long professorId) {
    List<Group> groups = professorService.getGroupsByProfessorId(professorId);
    return new ResponseEntity<>(groups, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Professor> createProfessor(@RequestBody Professor professor) {
    Professor savedProfessor = professorService.saveProfessor(professor);
    return new ResponseEntity<>(savedProfessor, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteProfessor(@PathVariable("id") Long id) {
    professorService.deleteProfessor(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}