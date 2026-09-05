import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post('https://localhost:7055/api/auth/register', userData);
  }
}