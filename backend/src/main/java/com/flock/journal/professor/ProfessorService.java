package com.flock.journal.professor;

import com.flock.journal.group.Group;
import com.flock.journal.lesson.Lesson;
import com.flock.journal.lesson.LessonRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfessorService {

  private final ProfessorRepository professorRepository;
  private final LessonRepository lessonRepository;

  @Autowired
  public ProfessorService(ProfessorRepository professorRepository,
      LessonRepository lessonRepository) {
    this.professorRepository = professorRepository;
    this.lessonRepository = lessonRepository;
  }

  public List<Professor> getAllProfessors() {
    return professorRepository.findAll();
  }

  public List<Group> getGroupsByProfessorId(Long professorId) {
    return professorRepository.findGroupsByProfessorId(professorId);
  }

  public Optional<Professor> getProfessorById(Long id) {
    return professorRepository.findById(id);
  }

  public List<Lesson> getLessonsByProfessorId(Long professorId) {
    return lessonRepository.findByProfessorId(professorId);
  }

  public Professor saveProfessor(Professor professor) {
    return professorRepository.save(professor);
  }

  public void deleteProfessor(Long id) {
    professorRepository.deleteById(id);
  }
}