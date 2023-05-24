package com.flock.journal.audiences;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AudienceService {

  private final AudienceRepository audienceRepository;

  @Autowired
  public AudienceService(AudienceRepository audienceRepository) {
    this.audienceRepository = audienceRepository;
  }

  public List<Audience> getAllAudiences() {
    return audienceRepository.findAll();
  }

  public Optional<Audience> getAudienceById(Long id) {
    return audienceRepository.findById(id);
  }

  public Audience saveAudience(Audience audience) {
    return audienceRepository.save(audience);
  }

  public void deleteAudience(Long id) {
    audienceRepository.deleteById(id);
  }
}