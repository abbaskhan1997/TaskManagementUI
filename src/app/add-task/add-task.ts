import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task-service';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  constructor(private taskService: TaskService) {}

  title: string = '';
  description: string = '';
  status: string = '';
  priority: string = '';
  dueDate: string = '';

  private clearForm() {
    this.title = '';
    this.description = '';
    this.status = '';
    this.priority = '';
    this.dueDate = '';
  }

  saveTask() {
    const task = {
      title: this.title,
      description: this.description,
      status: this.status,
      priority: this.priority,
      dueDate: this.dueDate,
    };

    this.clearForm();

    this.taskService.createTask(task).subscribe((response) => {});
  }
}
