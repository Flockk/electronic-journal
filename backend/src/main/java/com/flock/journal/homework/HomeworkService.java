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

  public Optional<Homework> getHomeworkById(Long id) {
    return homeworkRepository.findById(id);
  }

  public Homework saveHomework(Homework homework) {
    return homeworkRepository.save(homework);
  }

  public Homework updateHomework(Long id, Homework updatedHomework) {
    Optional<Homework> existingHomework = getHomeworkById(id);
    if (existingHomework.isPresent()) {
      Homework existing = existingHomework.get();
      existing.setLesson(updatedHomework.getLesson());
      existing.setProfessor(updatedHomework.getProfessor());
      existing.setDescription(updatedHomework.getDescription());

      return saveHomework(existing);
    } else {
      return null;
    }
  }


  public void deleteHomework(Long id) {
    homeworkRepository.deleteById(id);
  }
}