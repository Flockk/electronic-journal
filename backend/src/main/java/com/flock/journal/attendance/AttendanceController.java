package com.flock.journal.attendance;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/attendance")
public class AttendanceController {

  private final AttendanceService attendanceService;

  @Autowired
  public AttendanceController(AttendanceService attendanceService) {
    this.attendanceService = attendanceService;
  }

  @GetMapping
  public ResponseEntity<List<Attendance>> getAllAttendances() {
    List<Attendance> attendances = attendanceService.getAllAttendances();
    return new ResponseEntity<>(attendances, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Attendance> getAttendanceById(@PathVariable("id") Long id) {
    Optional<Attendance> attendance = attendanceService.getAttendanceById(id);
    return attendance.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Attendance> createAttendance(@RequestBody Attendance attendance) {
    Attendance savedAttendance = attendanceService.saveAttendance(attendance);
    return new ResponseEntity<>(savedAttendance, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteAttendance(@PathVariable("id") Long id) {
    attendanceService.deleteAttendance(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}