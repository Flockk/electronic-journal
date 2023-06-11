package com.flock.journal.lesson;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LessonService {

  private final LessonRepository lessonRepository;

  @Autowired
  public LessonService(LessonRepository lessonRepository) {
    this.lessonRepository = lessonRepository;
  }

  public List<Lesson> getAllLessons() {
    return lessonRepository.findAll();
  }

  public Optional<Lesson> getLessonById(Long id) {
    return lessonRepository.findById(id);
  }

  public Lesson saveLesson(Lesson lesson) {
    return lessonRepository.save(lesson);
  }

  public void deleteLesson(Long id) {
    lessonRepository.deleteById(id);
  }
}