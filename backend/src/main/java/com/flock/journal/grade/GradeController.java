package com.flock.journal.grade;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/grades")
@PreAuthorize("hasAnyRole('ADMIN', 'PROFESSOR', 'STUDENT')")
public class GradeController {

  private final GradeService gradeService;

  @Autowired
  public GradeController(GradeService gradeService) {
    this.gradeService = gradeService;
  }

  @GetMapping
  public ResponseEntity<List<Grade>> getAllGrades() {
    List<Grade> grades = gradeService.getAllGrades();
    return new ResponseEntity<>(grades, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Grade> getGradeById(@PathVariable("id") Long id) {
    Optional<Grade> grade = gradeService.getGradeById(id);
    return grade.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/{groupId}/{disciplineId}/{professorId}")
  @PreAuthorize("hasAuthority('professor:read')")
  public ResponseEntity<List<Grade>> getGradesByGroupDisciplineAndProfessor(
      @PathVariable Long groupId,
      @PathVariable Long disciplineId,
      @PathVariable Long professorId
  ) {
    List<Grade> grades = gradeService.getGradesByGroupDisciplineAndProfessor(
        groupId,
        disciplineId,
        professorId
    );
    return new ResponseEntity<>(grades, HttpStatus.OK);
  }

  @PutMapping("/{id}")
  @PreAuthorize("hasAuthority('professor:update')")
  public ResponseEntity<Grade> updateGrade(@PathVariable("id") Long id,
      @RequestBody Grade updatedGrade) {
    Optional<Grade> grade = gradeService.updateGrade(id, updatedGrade);
    return grade.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Grade> createGrade(@RequestBody Grade grade) {
    Grade savedGrade = gradeService.saveGrade(grade);
    return new ResponseEntity<>(savedGrade, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteGrade(@PathVariable("id") Long id) {
    gradeService.deleteGrade(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}