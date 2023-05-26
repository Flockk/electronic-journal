package com.flock.journal.lesson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/lessons")
public class LessonController {
  private final LessonService lessonService;

  @Autowired
  public LessonController(LessonService lessonService) {
    this.lessonService = lessonService;
  }

  @GetMapping
  public ResponseEntity<List<Lesson>> getAllLessons() {
    List<Lesson> lessons = lessonService.getAllLessons();
    return new ResponseEntity<>(lessons, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Lesson> getLessonById(@PathVariable("id") Long id) {
    Optional<Lesson> lesson = lessonService.getLessonById(id);
    return lesson.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Lesson> createLesson(@RequestBody Lesson lesson) {
    Lesson savedLesson = lessonService.saveLesson(lesson);
    return new ResponseEntity<>(savedLesson, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteLesson(@PathVariable("id") Long id) {
    lessonService.deleteLesson(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}