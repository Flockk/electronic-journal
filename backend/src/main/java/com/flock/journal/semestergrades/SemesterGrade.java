package com.flock.journal.semestergrades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.flock.journal.discipline.Discipline;
import com.flock.journal.professor.Professor;
import com.flock.journal.semester.Semester;
import com.flock.journal.student.Student;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "semester_grades")
public class SemesterGrade {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "sem_grade_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "sem_id")
  private Semester semester;

  @ManyToOne
  @JoinColumn(name = "stud_id")
  private Student student;

  @ManyToOne
  @JoinColumn(name = "prof_id")
  private Professor professor;

  @ManyToOne
  @JoinColumn(name = "disc_id")
  private Discipline discipline;

  @Column(name = "value")
  private Integer value;
}