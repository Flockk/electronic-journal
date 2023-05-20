package com.flock.journal.repository;

import com.flock.journal.model.Discipline;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DisciplineRepository extends JpaRepository<Discipline, Long> {

}