package com.flock.journal.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "divisions")
@Data
public class Division {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "div_id")
  private Long id;

  @Column(name = "title", unique = true, nullable = false)
  private String title;
}