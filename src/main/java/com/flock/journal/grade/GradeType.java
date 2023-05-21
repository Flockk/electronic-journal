package com.flock.journal.grade;

public enum GradeType {
  EXCELLENT("Отлично"),
  GOOD("Хорошо"),
  SATISFACTORY("Удовлетворительно"),
  UNSATISFACTORY("Неудовлетворительно"),
  PASS("Зачтено"),
  FAIL("Не зачтено");

  private final String name;

  GradeType(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}