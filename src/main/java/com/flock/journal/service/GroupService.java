package com.flock.journal.service;

import java.util.List;
import java.util.Optional;

import com.flock.journal.model.Group;
import com.flock.journal.repository.GroupRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupService {
  private final GroupRepository groupRepository;

  @Autowired
  public GroupService(GroupRepository groupRepository) {
    this.groupRepository = groupRepository;
  }

  public List<Group> getAllGroups() {
    return groupRepository.findAll();
  }

  public Optional<Group> getGroupById(Long id) {
    return groupRepository.findById(id);
  }

  public Group saveGroup(Group group) {
    return groupRepository.save(group);
  }

  public void deleteGroup(Long id) {
    groupRepository.deleteById(id);
  }
}