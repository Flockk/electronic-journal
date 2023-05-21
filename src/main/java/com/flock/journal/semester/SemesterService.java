package com.flock.journal.semester;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SemesterService {

  private final SemesterRepository semesterRepository;

  @Autowired
  public SemesterService(SemesterRepository semesterRepository) {
    this.semesterRepository = semesterRepository;
  }

  public List<Semester> getAllSemesters() {
    return semesterRepository.findAll();
  }

  public Optional<Semester> getSemesterById(Long id) {
    return semesterRepository.findById(id);
  }

  public Semester saveSemester(Semester semester) {
    return semesterRepository.save(semester);
  }

  public void deleteSemester(Long id) {
    semesterRepository.deleteById(id);
  }
}