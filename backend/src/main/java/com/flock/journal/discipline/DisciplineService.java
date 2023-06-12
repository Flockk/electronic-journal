package com.flock.journal.discipline;

import com.flock.journal.professor.Professor;
import com.flock.journal.professor.ProfessorRepository;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DisciplineService {

  private final DisciplineRepository disciplineRepository;
  private final ProfessorRepository professorRepository;

  @Autowired
  public DisciplineService(
      DisciplineRepository disciplineRepository,
      ProfessorRepository professorRepository
  ) {
    this.disciplineRepository = disciplineRepository;
    this.professorRepository = professorRepository;
  }

  public List<Discipline> getAllDisciplines() {
    return disciplineRepository.findAll();
  }

  public List<Discipline> getDisciplinesByProfessorId(Long professorId) {
    Optional<Professor> professor = professorRepository.findById(professorId);
    return professor.map(Professor::getDisciplines).orElse(Collections.emptyList());
  }

  public Optional<Discipline> getDisciplineById(Long id) {
    return disciplineRepository.findById(id);
  }

  public List<Discipline> getDisciplinesForStudent(Long studentId) {
    return disciplineRepository.findDisciplinesByStudentId(studentId);
  }

  public Discipline saveDiscipline(Discipline discipline) {
    return disciplineRepository.save(discipline);
  }

  public void deleteDiscipline(Long id) {
    disciplineRepository.deleteById(id);
  }
}