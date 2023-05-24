package com.flock.journal.semestergrades;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/semester-grades")
public class SemesterGradeController {

  private final SemesterGradeService semesterGradeService;

  @Autowired
  public SemesterGradeController(SemesterGradeService semesterGradeService) {
    this.semesterGradeService = semesterGradeService;
  }

  @GetMapping
  public ResponseEntity<List<SemesterGrade>> getAllSemesterGrades() {
    List<SemesterGrade> semesterGrades = semesterGradeService.getAllSemesterGrades();
    return new ResponseEntity<>(semesterGrades, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<SemesterGrade> getSemesterGradeById(@PathVariable("id") Long id) {
    Optional<SemesterGrade> semesterGrade = semesterGradeService.getSemesterGradeById(id);
    return semesterGrade.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<SemesterGrade> createSemesterGrade(
      @RequestBody SemesterGrade semesterGrade) {
    SemesterGrade savedSemesterGrade = semesterGradeService.saveSemesterGrade(semesterGrade);
    return new ResponseEntity<>(savedSemesterGrade, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteSemesterGrade(@PathVariable("id") Long id) {
    semesterGradeService.deleteSemesterGrade(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}