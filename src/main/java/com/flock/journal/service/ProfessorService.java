package com.flock.journal.service;

import com.flock.journal.model.Professor;
import com.flock.journal.repository.ProfessorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {

  private final ProfessorRepository professorRepository;

  @Autowired
  public ProfessorService(ProfessorRepository professorRepository) {
    this.professorRepository = professorRepository;
  }

  public List<Professor> getAllProfessors() {
    return professorRepository.findAll();
  }

  public Optional<Professor> getProfessorById(Long id) {
    return professorRepository.findById(id);
  }

  public Professor saveProfessor(Professor professor) {
    return professorRepository.save(professor);
  }

  public void deleteProfessor(Long id) {
    professorRepository.deleteById(id);
  }
}