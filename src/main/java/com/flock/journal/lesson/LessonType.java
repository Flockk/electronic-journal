package com.flock.journal.lesson;

public enum LessonType {
  LECTURE("Лекция"),
  PRACTICAL("Практическое занятие"),
  SEMINAR("Семинар"),
  LAB("Лабораторная работа"),
  COURSEWORK("Курсовая работа"),
  QUIZ("Зачёт"),
  CONSULTATION("Консультация"),
  EXAM("Экзамен"),
  PRACTICE("Практика"),
  DISSERTATION("Дипломная работа");

  private final String name;

  LessonType(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}