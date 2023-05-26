package com.flock.journal.department;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/departments")
public class DepartmentController {

  private final DepartmentService departmentService;

  @Autowired
  public DepartmentController(DepartmentService departmentService) {
    this.departmentService = departmentService;
  }

  @GetMapping
  public ResponseEntity<List<Department>> getAllDepartments() {
    List<Department> departments = departmentService.getAllDepartments();
    return new ResponseEntity<>(departments, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Department> getDepartmentById(@PathVariable("id") Long id) {
    Optional<Department> department = departmentService.getDepartmentById(id);
    return department.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Department> createDepartment(@RequestBody Department department) {
    Department savedDepartment = departmentService.saveDepartment(department);
    return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteDepartment(@PathVariable("id") Long id) {
    departmentService.deleteDepartment(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}