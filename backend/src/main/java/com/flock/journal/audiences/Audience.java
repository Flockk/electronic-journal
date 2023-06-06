package com.flock.journal.audiences;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import com.flock.journal.lesson.Lesson;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "audiences")
public class Audience {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "aud_id")
  private Long id;

  @Column(name = "number", length = 5, nullable = false)
  private String number;

  @Column(name = "building", nullable = false)
  private int building;

  @ManyToMany(mappedBy = "audiences")
  private List<Lesson> lessons;
}