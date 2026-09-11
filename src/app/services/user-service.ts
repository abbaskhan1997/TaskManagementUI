import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7055/api/User';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, userData: any) {
    return this.http.put(`${this.apiUrl}/${id}`, userData);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}