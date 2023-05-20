package com.flock.journal.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "disciplines")
@Data
public class Discipline {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "disc_id")
  private Long id;

  @Column(name = "name", unique = true, nullable = false)
  private String name;

  @ManyToMany(mappedBy = "disciplines")
  private List<Professor> professors;
}