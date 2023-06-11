package com.flock.journal.homework;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface HomeworkRepository extends JpaRepository<Homework, Long> {

  List<Homework> findByProfessorId(Long professorId);

  @Query("SELECT h FROM Homework h JOIN h.groups g JOIN h.lesson l " +
      "WHERE g.id = :groupId AND l.discipline.id = :disciplineId AND l.professor.id = :professorId")
  List<Homework> findByGroupDisciplineProfessor(
      @Param("groupId") Long groupId, @Param("disciplineId") Long disciplineId,
      @Param("professorId") Long professorId);
}