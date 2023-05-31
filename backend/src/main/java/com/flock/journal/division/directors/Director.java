package com.flock.journal.division.directors;

import com.flock.journal.division.Division;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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
@Table(name = "division_directors")
public class Director {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "director_id")
  private Long id;

  @OneToOne
  @JoinColumn(name = "div_id")
  private Division division;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "email")
  private String email;

  @Column(name = "phone")
  private String phone;

  @Column(name = "address")
  private String address;

  @Column(name = "image")
  private byte[] image;
}
