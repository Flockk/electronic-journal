package com.flock.journal.repository;

import com.flock.journal.model.Group;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {

}