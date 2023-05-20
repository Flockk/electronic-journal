package com.flock.journal.service;

import com.flock.journal.model.Student;
import com.flock.journal.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
  private final StudentRepository studentRepository;

  @Autowired
  public StudentService(StudentRepository studentRepository) {
    this.studentRepository = studentRepository;
  }

  public List<Student> getAllStudents() {
    return studentRepository.findAll();
  }

  public Optional<Student> getStudentById(Long id) {
    return studentRepository.findById(id);
  }

  public Student saveStudent(Student student) {
    return studentRepository.save(student);
  }

  public void deleteStudent(Long id) {
    studentRepository.deleteById(id);
  }
}