package com.flock.journal.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
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

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "groups")
public class Group {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "group_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "prof_id")
  private Professor professor;

  @OneToMany(mappedBy = "group")
  private List<Student> students;

  @Column(name = "title", length = 20, nullable = false)
  private String title;

  @Column(name = "foundation_date")
  private LocalDate foundationDate;

  @Column(name = "end_date")
  private LocalDate endDate;

  @ManyToMany
  @JoinTable(
      name = "groups_lessons",
      joinColumns = @JoinColumn(name = "group_id"),
      inverseJoinColumns = @JoinColumn(name = "lsn_id")
  )
  private List<Lesson> lessons;
}