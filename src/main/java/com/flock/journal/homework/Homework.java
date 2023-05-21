package com.flock.journal.homework;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.flock.journal.lesson.Lesson;
import com.flock.journal.professor.Professor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "homeworks")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Homework {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "hw_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "lsn_id")
  private Lesson lesson;

  @ManyToOne
  @JoinColumn(name = "prof_id")
  private Professor professor;

  @Column(name = "description", columnDefinition = "TEXT")
  private String description;

  @Column(name = "foundation_date")
  private LocalDate foundationDate;

  @Column(name = "end_date")
  private LocalDate endDate;
}