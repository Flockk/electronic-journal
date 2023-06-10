package com.flock.journal.student;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StudentRepository extends JpaRepository<Student, Long> {

  @Query("SELECT s FROM Student s WHERE s.user.id = :userId")
  Optional<Student> findByUserId(@Param("userId") Long userId);
}