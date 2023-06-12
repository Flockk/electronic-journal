package com.flock.journal.student;

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
@RequestMapping("/api/v1/students")
@PreAuthorize("hasAnyRole('ADMIN', 'PROFESSOR', 'STUDENT')")
public class StudentController {

  private final UserService userService;
  private final StudentService studentService;

  @Autowired
  public StudentController(UserService userService, StudentService studentService) {
    this.userService = userService;
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

  @GetMapping("/me")
  @PreAuthorize("hasAuthority('student:read')")
  public ResponseEntity<Student> getCurrentStudent() throws NotFoundException {
    Student student = userService.getCurrentStudent();
    return ResponseEntity.ok(student);
  }

  @GetMapping("/me/group")
  @PreAuthorize("hasAuthority('student:read')")
  public ResponseEntity<Group> getCurrentStudentGroup() throws NotFoundException {
    Group group = userService.getCurrentStudentGroup();
    return ResponseEntity.ok(group);
  }

  @GetMapping("/group/{groupId}")
  @PreAuthorize("hasAuthority('professor:read')")
  public ResponseEntity<List<Student>> getStudentsByGroupId(@PathVariable("groupId") Long groupId) {
    List<Student> students = studentService.getStudentsByGroupId(groupId);
    return new ResponseEntity<>(students, HttpStatus.OK);
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