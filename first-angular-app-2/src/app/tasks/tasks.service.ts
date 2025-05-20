import { type NewTask } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private tasks = [
    {
      id: 1,
      uid: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular from scratch',
      dueDate: '2023-10-01',
    },
    {
      id: 2,
      uid: 'u2',
      title: 'Master Angular',
      summary: 'Learn Angular from scratch',
      dueDate: '2023-10-01',
    },
    {
      id: 3,
      uid: 'u2',
      title: 'Master React',
      summary: 'Learn React from scratch',
      dueDate: '2023-10-10',
    },
  ];
  selectedUserTasks(userId: string) {
    return this.tasks.filter((task) => task.uid === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: Math.random(),
      uid: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
