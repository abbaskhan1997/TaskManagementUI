import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks implements OnInit {
  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}
  searchText: string = '';
  tasks: any[] = [];

  ngOnInit() {
    this.loadTasks();
  }

  get filteredTasks() {
  return this.tasks.filter(task =>
    task.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
    task.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
    task.status.toLowerCase().includes(this.searchText.toLowerCase()) ||
    task.priority.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: any) => {
      this.tasks = tasks as any[];
      this.cdr.detectChanges(); // Trigger change detection to update the view
    });
  }

  editTask(task: any) {
    this.router.navigate(['/add-task'], {
      state: { task: task },
    });
  }

  deleteTask(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');

    if (confirmDelete) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }
}
