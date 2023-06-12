package com.flock.journal.discipline;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/disciplines")
@PreAuthorize("hasAnyRole('ADMIN', 'PROFESSOR', 'STUDENT')")
public class DisciplineController {

  private final DisciplineService disciplineService;

  @Autowired
  public DisciplineController(DisciplineService disciplineService) {
    this.disciplineService = disciplineService;
  }

  @GetMapping
  public ResponseEntity<List<Discipline>> getAllDisciplines() {
    List<Discipline> disciplines = disciplineService.getAllDisciplines();
    return new ResponseEntity<>(disciplines, HttpStatus.OK);
  }

  @GetMapping("/professors/{professorId}")
  @PreAuthorize("hasAnyAuthority('admin:read', 'professor:read')")
  public ResponseEntity<List<Discipline>> getDisciplinesByProfessor(
      @PathVariable("professorId") Long professorId) {
    List<Discipline> disciplines = disciplineService.getDisciplinesByProfessorId(professorId);
    if (disciplines.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(disciplines, HttpStatus.OK);
  }

  @GetMapping("/students/{studentId}")
  @PreAuthorize("hasAuthority('student:read')")
  public ResponseEntity<List<Discipline>> getStudentDisciplines(
      @PathVariable("studentId") Long studentId) {
    List<Discipline> disciplines = disciplineService.getDisciplinesForStudent(studentId);
    if (disciplines.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(disciplines, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Discipline> getDisciplineById(@PathVariable("id") Long id) {
    Optional<Discipline> discipline = disciplineService.getDisciplineById(id);
    return discipline.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Discipline> createDiscipline(@RequestBody Discipline discipline) {
    Discipline savedDiscipline = disciplineService.saveDiscipline(discipline);
    return new ResponseEntity<>(savedDiscipline, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteDiscipline(@PathVariable("id") Long id) {
    disciplineService.deleteDiscipline(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}