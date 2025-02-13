import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  // OnCompleteTask(id: string) {}
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddNewTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTask) {
  //   this.isAddingTask = false;
  // }

  onCompleteTask(id: string) {
    return this.tasksService.deleteTask(id);
  }
}
