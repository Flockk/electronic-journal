package com.flock.journal.attendance;

import com.flock.journal.lesson.Lesson;
import com.flock.journal.professor.Professor;
import com.flock.journal.student.Student;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "attendance")
public class Attendance {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "attend_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "lsn_id")
  private Lesson lesson;

  @ManyToOne
  @JoinColumn(name = "stud_id")
  private Student student;

  @ManyToOne
  @JoinColumn(name = "prof_id")
  private Professor professor;

  @Column(name = "is_present")
  private Boolean isPresent;
}