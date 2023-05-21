package com.flock.journal.homework;

import java.util.List;
import java.time.LocalDate;

import jakarta.persistence.ManyToMany;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.flock.journal.group.Group;
import com.flock.journal.student.Student;
import com.flock.journal.grade.Grade;
import com.flock.journal.lesson.Lesson;
import com.flock.journal.professor.Professor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "homeworks")
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

  @OneToMany(mappedBy = "homework")
  private List<Grade> grades;

  @ManyToMany(mappedBy = "homeworks")
  private List<Group> groups;

  @ManyToMany(mappedBy = "homeworks")
  private List<Student> students;
}