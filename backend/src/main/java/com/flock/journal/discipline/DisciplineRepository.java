package com.flock.journal.discipline;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DisciplineRepository extends JpaRepository<Discipline, Long> {

  @Query("SELECT DISTINCT d FROM Discipline d " +
      "JOIN d.lessons l " +
      "JOIN l.groups g " +
      "JOIN g.students s " +
      "WHERE s.id = :studentId")
  List<Discipline> findDisciplinesByStudentId(@Param("studentId") Long studentId);
}