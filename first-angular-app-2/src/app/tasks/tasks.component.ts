import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // imports: [TaskComponent, NewTaskComponent],
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  // @Output() addTask = new EventEmitter<boolean>();
  isTaskAdding = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.selectedUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isTaskAdding = true;
  }

  onCancelAddTask() {
    this.isTaskAdding = false;
  }

  onAddTask(task: NewTask) {
    this.isTaskAdding = false;
  }
}
