package com.flock.journal.homework;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/homeworks")
public class HomeworkController {

  private final HomeworkService homeworkService;

  @Autowired
  public HomeworkController(HomeworkService homeworkService) {
    this.homeworkService = homeworkService;
  }

  @GetMapping
  public ResponseEntity<List<Homework>> getAllHomeworks() {
    List<Homework> homeworks = homeworkService.getAllHomeworks();
    return new ResponseEntity<>(homeworks, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Homework> getHomeworkById(@PathVariable("id") Long id) {
    Optional<Homework> homework = homeworkService.getHomeworkById(id);
    return homework.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Homework> createHomework(@RequestBody Homework homework) {
    Homework savedHomework = homeworkService.saveHomework(homework);
    return new ResponseEntity<>(savedHomework, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteHomework(@PathVariable("id") Long id) {
    homeworkService.deleteHomework(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}