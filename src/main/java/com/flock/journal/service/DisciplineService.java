package com.flock.journal.service;

import com.flock.journal.model.Discipline;
import com.flock.journal.repository.DisciplineRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DisciplineService {
  private final DisciplineRepository disciplineRepository;

  @Autowired
  public DisciplineService(DisciplineRepository disciplineRepository) {
    this.disciplineRepository = disciplineRepository;
  }

  public List<Discipline> getAllDisciplines() {
    return disciplineRepository.findAll();
  }

  public Optional<Discipline> getDisciplineById(Long id) {
    return disciplineRepository.findById(id);
  }

  public Discipline saveDiscipline(Discipline discipline) {
    return disciplineRepository.save(discipline);
  }

  public void deleteDiscipline(Long id) {
    disciplineRepository.deleteById(id);
  }
}