package com.flock.journal.division.directors;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DirectorService {

  private final DirectorRepository directorRepository;

  @Autowired
  public DirectorService(DirectorRepository directorRepository) {
    this.directorRepository = directorRepository;
  }

  public List<Director> getAllDirectors() {
    return directorRepository.findAll();
  }

  public Optional<Director> getDirectorById(Long id) {
    return directorRepository.findById(id);
  }

  public Director saveDirector(Director director) {
    return directorRepository.save(director);
  }

  public void deleteDirector(Long id) {
    directorRepository.deleteById(id);
  }
}
