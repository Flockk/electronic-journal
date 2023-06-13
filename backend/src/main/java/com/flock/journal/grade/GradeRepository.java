package com.flock.journal.grade;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface GradeRepository extends JpaRepository<Grade, Long> {

  @Query("SELECT g FROM Grade g " +
      "JOIN g.lesson l " +
      "JOIN g.student s " +
      "JOIN l.discipline d " +
      "JOIN l.groups gr " +
      "JOIN l.professor p " +
      "WHERE gr.id = :groupId " +
      "AND d.id = :disciplineId " +
      "AND p.id = :professorId")
  List<Grade> findGradesByGroupDisciplineAndProfessor(
      @Param("groupId") Long groupId,
      @Param("disciplineId") Long disciplineId,
      @Param("professorId") Long professorId
  );

  @Query("SELECT g FROM Grade g " +
      "JOIN g.lesson l " +
      "JOIN l.discipline d " +
      "JOIN g.student s " +
      "WHERE d.id = :disciplineId " +
      "AND s.id = :studentId ")
  List<Grade> findGradesByStudentAndDiscipline(
      @Param("disciplineId") Long disciplineId,
      @Param("studentId") Long studentId
  );
}