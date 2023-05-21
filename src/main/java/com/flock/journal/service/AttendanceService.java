package com.flock.journal.service;

import java.util.List;
import java.util.Optional;

import com.flock.journal.model.Attendance;
import com.flock.journal.repository.AttendanceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttendanceService {

  private final AttendanceRepository attendanceRepository;

  @Autowired
  public AttendanceService(AttendanceRepository attendanceRepository) {
    this.attendanceRepository = attendanceRepository;
  }

  public List<Attendance> getAllAttendances() {
    return attendanceRepository.findAll();
  }

  public Optional<Attendance> getAttendanceById(Long id) {
    return attendanceRepository.findById(id);
  }

  public Attendance saveAttendance(Attendance attendance) {
    return attendanceRepository.save(attendance);
  }

  public void deleteAttendance(Long id) {
    attendanceRepository.deleteById(id);
  }
}