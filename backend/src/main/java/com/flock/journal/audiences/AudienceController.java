package com.flock.journal.audiences;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/audiences")
public class AudienceController {

  private final AudienceService audienceService;

  @Autowired
  public AudienceController(AudienceService audienceService) {
    this.audienceService = audienceService;
  }

  @GetMapping
  public ResponseEntity<List<Audience>> getAllAudiences() {
    List<Audience> audiences = audienceService.getAllAudiences();
    return new ResponseEntity<>(audiences, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Audience> getAudienceById(@PathVariable("id") Long id) {
    Optional<Audience> audience = audienceService.getAudienceById(id);
    return audience.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Audience> createAudience(@RequestBody Audience audience) {
    Audience savedAudience = audienceService.saveAudience(audience);
    return new ResponseEntity<>(savedAudience, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteAudience(@PathVariable("id") Long id) {
    audienceService.deleteAudience(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}