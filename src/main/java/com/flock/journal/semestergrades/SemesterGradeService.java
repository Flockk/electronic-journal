package com.flock.journal.semestergrades;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SemesterGradeService {

  private final SemesterGradeRepository semesterGradeRepository;

  @Autowired
  public SemesterGradeService(SemesterGradeRepository semesterGradeRepository) {
    this.semesterGradeRepository = semesterGradeRepository;
  }

  public List<SemesterGrade> getAllSemesterGrades() {
    return semesterGradeRepository.findAll();
  }

  public Optional<SemesterGrade> getSemesterGradeById(Long id) {
    return semesterGradeRepository.findById(id);
  }

  public SemesterGrade saveSemesterGrade(SemesterGrade semesterGrade) {
    return semesterGradeRepository.save(semesterGrade);
  }

  public void deleteSemesterGrade(Long id) {
    semesterGradeRepository.deleteById(id);
  }
}