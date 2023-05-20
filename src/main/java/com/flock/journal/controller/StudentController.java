package com.flock.journal.controller;

import java.util.List;
import java.util.Optional;

import com.flock.journal.model.Student;
import com.flock.journal.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {
  private final StudentService studentService;

  @Autowired
  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @GetMapping
  public ResponseEntity<List<Student>> getAllStudents() {
    List<Student> students = studentService.getAllStudents();
    return new ResponseEntity<>(students, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Student> getStudentById(@PathVariable("id") Long id) {
    Optional<Student> student = studentService.getStudentById(id);
    return student.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Student> createStudent(@RequestBody Student student) {
    Student savedStudent = studentService.saveStudent(student);
    return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteStudent(@PathVariable("id") Long id) {
    studentService.deleteStudent(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}