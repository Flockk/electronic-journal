package com.flock.journal.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

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

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

  @ManyToOne
  @JoinColumn(name = "dept_id")
  private Department department;

  @Column(name = "position", length = 50)
  private String position;

  @Column(name = "phone_number", length = 20)
  private String phoneNumber;

  @ManyToMany
  @JoinTable(
      name = "professors_disciplines",
      joinColumns = @JoinColumn(name = "prof_id"),
      inverseJoinColumns = @JoinColumn(name = "disc_id")
  )
  private List<Discipline> disciplines;
}