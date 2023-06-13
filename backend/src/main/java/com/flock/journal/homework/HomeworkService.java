package com.flock.journal.homework;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeworkService {

  private final HomeworkRepository homeworkRepository;

  @Autowired
  public HomeworkService(HomeworkRepository homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
  }

  public List<Homework> getAllHomeworks() {
    return homeworkRepository.findAll();
  }

  public List<Homework> getHomeworksByGroupDisciplineProfessor(
      Long groupId,
      Long disciplineId,
      Long professorId
  ) {
    return homeworkRepository.findByGroupDisciplineProfessor(
        groupId,
        disciplineId,
        professorId
    );
  }

  public List<Homework> getHomeworkByDisciplineAndGroupAndStudent(
      Long disciplineId,
      Long groupId,
      Long studentId
  ) {
    return homeworkRepository.findByDisciplineAndGroupAndStudent(
        disciplineId,
        groupId,
        studentId
    );
  }

  public Optional<Homework> getHomeworkById(Long id) {
    return homeworkRepository.findById(id);
  }

  public Homework saveHomework(Homework homework) {
    return homeworkRepository.save(homework);
  }

  public Optional<Homework> updateHomework(Long id, Homework updatedHomework) {
    Optional<Homework> homework = getHomeworkById(id);
    if (homework.isPresent()) {
      Homework existingHomework = homework.get();
      if (updatedHomework.getLesson() != null) {
        existingHomework.setLesson(updatedHomework.getLesson());
      }
      if (updatedHomework.getProfessor() != null) {
        existingHomework.setProfessor(updatedHomework.getProfessor());
      }
      existingHomework.setDescription(updatedHomework.getDescription());

      return Optional.of(homeworkRepository.save(existingHomework));
    } else {
      return Optional.empty();
    }
  }
  
  public void deleteHomework(Long id) {
    homeworkRepository.deleteById(id);
  }
}