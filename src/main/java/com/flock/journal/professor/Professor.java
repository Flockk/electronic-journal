package com.flock.journal.professor;

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
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import com.flock.journal.attendance.Attendance;
import com.flock.journal.department.Department;
import com.flock.journal.discipline.Discipline;
import com.flock.journal.group.Group;
import com.flock.journal.lesson.Lesson;
import com.flock.journal.user.User;

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

  @OneToOne
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

  @OneToMany(mappedBy = "professor")
  private List<Group> groups;

  @OneToMany(mappedBy = "professor")
  private List<Lesson> lessons;

  @OneToMany(mappedBy = "professor")
  private List<Attendance> attendances;
}