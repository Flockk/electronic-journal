package com.flock.journal.semester;

import com.flock.journal.semestergrades.SemesterGrade;
import jakarta.persistence.OneToMany;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "semesters")
public class Semester {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "sem_id")
  private Long id;

  @Column(name = "number")
  private int number;

  @Column(name = "start_date")
  private LocalDate startDate;

  @Column(name = "end_date")
  private LocalDate endDate;

  @OneToMany(mappedBy = "semester")
  private List<SemesterGrade> semesterGrades;
}