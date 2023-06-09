package com.flock.journal.discipline;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.flock.journal.semestergrades.SemesterGrade;
import jakarta.persistence.FetchType;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.flock.journal.lesson.Lesson;
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
@Table(name = "disciplines")
public class Discipline {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "disc_id")
  private Long id;

  @Column(name = "name", nullable = false, unique = true)
  private String name;

  @JsonIgnore
  @ManyToMany(mappedBy = "disciplines")
  private List<Professor> professors;

  @JsonIgnore
  @OneToMany(mappedBy = "discipline")
  private List<Lesson> lessons;

  @JsonIgnore
  @OneToMany(mappedBy = "discipline")
  private List<SemesterGrade> semesterGrades;
}