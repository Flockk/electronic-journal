package com.flock.journal.lesson;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.flock.journal.attendance.Attendance;
import com.flock.journal.audiences.Audience;
import com.flock.journal.discipline.Discipline;
import com.flock.journal.grade.Grade;
import com.flock.journal.group.Group;
import com.flock.journal.homework.Homework;
import com.flock.journal.professor.Professor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
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

  @OneToMany(mappedBy = "lesson")
  private List<Homework> homeworks;

  @OneToMany(mappedBy = "lesson")
  private List<Grade> grades;

  @ManyToMany
  @JoinTable(
      name = "lessons_audiences",
      joinColumns = @JoinColumn(name = "lsn_id"),
      inverseJoinColumns = @JoinColumn(name = "aud_id")
  )
  private List<Audience> audiences;
}
