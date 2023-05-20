package com.flock.journal.model;

import java.time.LocalDate;

import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "students")
public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "stud_id")
  private Long id;

  @OneToOne
  @JoinColumn(name = "user_id")
  private User user;

  @ManyToOne
  @JoinColumn(name = "group_id")
  private Group group;

  @Column(name = "course", nullable = false)
  private int course;

  @Column(name = "major", nullable = false)
  private String major;

  @Column(name = "level", nullable = false)
  private String level;

  @Column(name = "admission_date")
  private LocalDate admissionDate;

  @Column(name = "graduation_date")
  private LocalDate graduationDate;

  @Column(name = "phone_number")
  private String phoneNumber;
}