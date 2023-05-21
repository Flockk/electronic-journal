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

  public Optional<Homework> getHomeworkById(Long id) {
    return homeworkRepository.findById(id);
  }

  public Homework saveHomework(Homework homework) {
    return homeworkRepository.save(homework);
  }

  public void deleteHomework(Long id) {
    homeworkRepository.deleteById(id);
  }
}