package com.flock.journal.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.OneToMany;
import jakarta.persistence.ManyToMany;
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
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "lessons")
public class Lesson {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "lsn_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "disc_id")
  private Discipline discipline;

  @ManyToOne
  @JoinColumn(name = "prof_id")
  private Professor professor;

  @Enumerated(EnumType.STRING)
  @Column(name = "type", length = 25, nullable = false)
  private LessonType lessonType;

  @Column(name = "date")
  private LocalDateTime date;

  @Column(name = "topic")
  private String topic;

  @ManyToMany(mappedBy = "lessons")
  private List<Group> groups;

  @OneToMany(mappedBy = "lesson")
  private List<Attendance> attendances;
}