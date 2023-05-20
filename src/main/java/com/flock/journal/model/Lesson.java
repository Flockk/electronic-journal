package com.flock.journal.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

@Entity
@Table(name = "lessons")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Lesson {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "lsn_id")
  private Long id;

  @Enumerated(EnumType.STRING)
  @Column(name = "lsn_type", length = 25, nullable = false)
  private LessonType lessonType;

  @ManyToOne
  @JoinColumn(name = "disc_id")
  private Discipline discipline;

  @ManyToOne
  @JoinColumn(name = "prof_id")
  private Professor professor;

  @Column(name = "date")
  private LocalDateTime date;

  @Column(name = "topic")
  private String topic;
}