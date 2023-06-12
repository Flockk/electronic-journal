package com.flock.journal.homework;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/homeworks")
@PreAuthorize("hasAnyRole('ADMIN', 'PROFESSOR')")
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

  @GetMapping("/{groupId}/{disciplineId}/{professorId}")
  @PreAuthorize("hasAuthority('professor:read')")
  public ResponseEntity<List<Homework>> getHomeworksByGroupDisciplineProfessor(
      @PathVariable("groupId") Long groupId,
      @PathVariable("disciplineId") Long disciplineId,
      @PathVariable("professorId") Long professorId) {
    List<Homework> homeworks = homeworkService.getHomeworksByGroupDisciplineProfessor(
        groupId, disciplineId, professorId);
    return new ResponseEntity<>(homeworks, HttpStatus.OK);
  }

  @PostMapping
  @PreAuthorize("hasAuthority('professor:create')")
  public ResponseEntity<Homework> createHomework(@RequestBody Homework homework) {
    Homework savedHomework = homeworkService.saveHomework(homework);
    return new ResponseEntity<>(savedHomework, HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  @PreAuthorize("hasAuthority('professor:update')")
  public ResponseEntity<Homework> updateHomework(@PathVariable("id") Long id,
      @RequestBody Homework updatedHomework) {
    Optional<Homework> homework = homeworkService.updateHomework(id, updatedHomework);
    return homework.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteHomework(@PathVariable("id") Long id) {
    homeworkService.deleteHomework(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}