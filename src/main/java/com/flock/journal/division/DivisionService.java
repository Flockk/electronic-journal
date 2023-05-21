package com.flock.journal.division;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DivisionService {

  private final DivisionRepository divisionRepository;

  @Autowired
  public DivisionService(DivisionRepository divisionRepository) {
    this.divisionRepository = divisionRepository;
  }

  public List<Division> getAllDivisions() {
    return divisionRepository.findAll();
  }

  public Optional<Division> getDivisionById(Long id) {
    return divisionRepository.findById(id);
  }

  public Division saveDivision(Division division) {
    return divisionRepository.save(division);
  }

  public void deleteDivision(Long id) {
    divisionRepository.deleteById(id);
  }
}