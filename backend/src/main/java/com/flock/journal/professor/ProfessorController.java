package com.flock.journal.professor;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/professors")
public class ProfessorController {

  private final ProfessorService professorService;

  @Autowired
  public ProfessorController(ProfessorService professorService) {
    this.professorService = professorService;
  }

  @GetMapping
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