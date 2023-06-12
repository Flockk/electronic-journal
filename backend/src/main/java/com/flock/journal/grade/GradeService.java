package com.flock.journal.grade;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GradeService {

  private final GradeRepository gradeRepository;

  @Autowired
  public GradeService(GradeRepository gradeRepository) {
    this.gradeRepository = gradeRepository;
  }

  public List<Grade> getAllGrades() {
    return gradeRepository.findAll();
  }

  public Optional<Grade> getGradeById(Long id) {
    return gradeRepository.findById(id);
  }

  public List<Grade> getGradesByGroupDisciplineAndProfessor(
      Long groupId,
      Long disciplineId,
      Long professorId
  ) {
    return gradeRepository.findGradesByGroupDisciplineAndProfessor(
        groupId,
        disciplineId,
        professorId
    );
  }

  public Grade saveGrade(Grade grade) {
    return gradeRepository.save(grade);
  }

  public void deleteGrade(Long id) {
    gradeRepository.deleteById(id);
  }
}