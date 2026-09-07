import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks implements OnInit {
  constructor(private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}

tasks: any[] = [];
  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: any) => {
        this.tasks = tasks as any[];
        this.cdr.detectChanges(); // Trigger change detection to update the view
      
    });
  }
}
