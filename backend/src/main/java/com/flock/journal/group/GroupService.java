package com.flock.journal.group;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupService {

  private static final Logger log = LogManager.getLogger(GroupService.class);
  private final GroupRepository groupRepository;

  @Autowired
  public GroupService(GroupRepository groupRepository) {
    this.groupRepository = groupRepository;
  }

  public List<Group> getAllGroups() {
    log.info("Получение всех групп");
    List<Group> groups = groupRepository.findAll();
    log.info("Найдено {} групп", groups.size());
    return groups;
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