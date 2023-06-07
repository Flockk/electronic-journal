package com.flock.journal.group;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/groups")
@PreAuthorize("hasRole('ADMIN')")
public class GroupController {

  private static final Logger log = LogManager.getLogger(GroupController.class);
  private final GroupService groupService;

  @Autowired
  public GroupController(GroupService groupService) {
    this.groupService = groupService;
  }

  @GetMapping
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<List<Group>> getAllGroups() {
    log.info("Получение всех групп");
    List<Group> groups = groupService.getAllGroups();
    log.info("Найдено {} групп", groups.size());
    return new ResponseEntity<>(groups, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasAuthority('admin:read')")
  public ResponseEntity<Group> getGroupById(@PathVariable("id") Long id) {
    Optional<Group> group = groupService.getGroupById(id);
    return group.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Group> createGroup(@RequestBody Group group) {
    Group savedGroup = groupService.saveGroup(group);
    return new ResponseEntity<>(savedGroup, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteGroup(@PathVariable("id") Long id) {
    groupService.deleteGroup(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
