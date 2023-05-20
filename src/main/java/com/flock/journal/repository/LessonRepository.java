package com.flock.journal.repository;

import com.flock.journal.model.Lesson;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

}