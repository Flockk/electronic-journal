package com.flock.journal.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Data;


@Entity
@Table(name = "professors")
@Data
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
}