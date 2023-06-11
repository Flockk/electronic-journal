package com.flock.journal.professor;

import com.flock.journal.group.Group;
import com.flock.journal.homework.Homework;
import com.flock.journal.homework.HomeworkRepository;
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

  private final HomeworkRepository homeworkRepository;

  @Autowired
  public ProfessorService(ProfessorRepository professorRepository,
      LessonRepository lessonRepository, HomeworkRepository homeworkRepository) {
    this.professorRepository = professorRepository;
    this.lessonRepository = lessonRepository;
    this.homeworkRepository = homeworkRepository;
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

  public List<Homework> getHomeworksByProfessorId(Long professorId) {
    return homeworkRepository.findByProfessorId(professorId);
  }

  public Professor saveProfessor(Professor professor) {
    return professorRepository.save(professor);
  }

  public void deleteProfessor(Long id) {
    professorRepository.deleteById(id);
  }
}