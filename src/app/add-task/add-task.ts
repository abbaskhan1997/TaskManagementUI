import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task-service';
import { Router } from '@angular/router';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  constructor(private taskService: TaskService,
     private router: Router) 
     {
       const task = history.state.task;

  if (task) {
    
    this.isEditMode = true;

    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.priority = task.priority;
   this.dueDate = task.dueDate.split('T')[0];
     }
    }

  title: string = '';
  description: string = '';
  status: string = '';
  priority: string = '';
  dueDate: string = '';

  isEditMode: boolean = false;

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

  updateTask() {
  const task = {
    id: history.state.task.id,
    title: this.title,
    description: this.description,
    status: this.status,
    priority: this.priority,
    dueDate: this.dueDate
  };

  this.taskService.updateTask(task.id, task).subscribe((response) => {
    console.log(response);
  });
}
}
