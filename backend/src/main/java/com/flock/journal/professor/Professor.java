package com.flock.journal.professor;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.flock.journal.semestergrades.SemesterGrade;
import jakarta.persistence.FetchType;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import com.flock.journal.attendance.Attendance;
import com.flock.journal.discipline.Discipline;
import com.flock.journal.grade.Grade;
import com.flock.journal.group.Group;
import com.flock.journal.homework.Homework;
import com.flock.journal.lesson.Lesson;
import com.flock.journal.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "professors")
public class Professor {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "prof_id")
  private Long id;

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id")
  private User user;

  @Column(name = "position", length = 50)
  private String position;

  @Column(name = "phone_number", length = 20)
  private String phoneNumber;

  @JsonIgnore
  @ManyToMany
  @JoinTable(
      name = "professors_disciplines",
      joinColumns = @JoinColumn(name = "prof_id"),
      inverseJoinColumns = @JoinColumn(name = "disc_id")
  )
  private List<Discipline> disciplines;

  @JsonIgnore
  @OneToMany(mappedBy = "professor")
  private List<Group> groups;

  @JsonIgnore
  @OneToMany(mappedBy = "professor")
  private List<Lesson> lessons;

  @JsonIgnore
  @OneToMany(mappedBy = "professor")
  private List<Attendance> attendances;

  @JsonIgnore
  @OneToMany(mappedBy = "professor")
  private List<Homework> homeworks;

  @JsonIgnore
  @OneToMany(mappedBy = "professor")
  private List<Grade> grades;

  @JsonIgnore
  @OneToMany(mappedBy = "professor")
  private List<SemesterGrade> semesterGrades;
}