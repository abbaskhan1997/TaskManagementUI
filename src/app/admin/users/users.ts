import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
searchText: string = '';
  users: any[] = [];

  constructor(private userService: UserService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.getUsers();
  }

  get filteredUsers() {
  return this.users.filter(user =>
    user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
    user.role.toLowerCase().includes(this.searchText.toLowerCase())
  );
  
}

  getUsers() {
    this.userService.getUsers().subscribe(data => {
       console.log('Users API data:', data);
      this.users = data;
      this.cdRef.detectChanges();
    });
  }
}