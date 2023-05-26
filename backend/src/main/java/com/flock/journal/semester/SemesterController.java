package com.flock.journal.semester;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/semesters")
public class SemesterController {

  private final SemesterService semesterService;

  @Autowired
  public SemesterController(SemesterService semesterService) {
    this.semesterService = semesterService;
  }

  @GetMapping
  public ResponseEntity<List<Semester>> getAllSemesters() {
    List<Semester> semesters = semesterService.getAllSemesters();
    return new ResponseEntity<>(semesters, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Semester> getSemesterById(@PathVariable("id") Long id) {
    Optional<Semester> semester = semesterService.getSemesterById(id);
    return semester.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Semester> createSemester(@RequestBody Semester semester) {
    Semester savedSemester = semesterService.saveSemester(semester);
    return new ResponseEntity<>(savedSemester, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteSemester(@PathVariable("id") Long id) {
    semesterService.deleteSemester(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}