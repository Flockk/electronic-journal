package com.flock.journal.homework;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkRepository extends JpaRepository<Homework, Long> {

  List<Homework> findByProfessorId(Long professorId);
}