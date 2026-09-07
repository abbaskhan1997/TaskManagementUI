import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks() {
  return this.http.get('https://localhost:7055/api/Task');
}

createTask(task: any) {
  return this.http.post(
    'https://localhost:7055/api/Task',
    task
  );
}

}
