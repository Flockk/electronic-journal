package com.flock.journal.grade;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import com.flock.journal.homework.Homework;
import com.flock.journal.lesson.Lesson;
import com.flock.journal.professor.Professor;
import com.flock.journal.student.Student;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "grades")
public class Grade {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "grade_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "lsn_id")
  private Lesson lesson;

  @ManyToOne
  @JoinColumn(name = "hw_id")
  private Homework homework;

  @ManyToOne
  @JoinColumn(name = "stud_id")
  private Student student;

  @ManyToOne
  @JoinColumn(name = "prof_id")
  private Professor professor;

  @Enumerated(EnumType.STRING)
  @Column(name = "type", length = 20)
  private GradeType gradeType;

  @Column(name = "date")
  private LocalDateTime date;

  @Column(name = "value")
  private BigDecimal value;
}