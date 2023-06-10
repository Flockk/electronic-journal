package com.flock.journal.lesson;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

  List<Lesson> findByProfessorId(Long professorId);
}