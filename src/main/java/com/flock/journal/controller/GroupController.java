package com.flock.journal.controller;

import com.flock.journal.model.Group;
import com.flock.journal.service.GroupService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/groups")
public class GroupController {
  private final GroupService groupService;

  @Autowired
  public GroupController(GroupService groupService) {
    this.groupService = groupService;
  }

  @GetMapping
  public ResponseEntity<List<Group>> getAllGroups() {
    List<Group> groups = groupService.getAllGroups();
    return new ResponseEntity<>(groups, HttpStatus.OK);
  }

  @GetMapping("/{id}")
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