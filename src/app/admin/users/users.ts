import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
searchText: string = '';
  users: any[] = [];
  selectedUser: any = null;

  constructor(private userService: UserService, private cdRef: ChangeDetectorRef, private router: Router) {}

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
      this.users = data;
      this.cdRef.detectChanges();
    });
  }

  updateUser() {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(() => {
        alert('User updated successfully!');
        this.getUsers();
        this.selectedUser = null;
        
      });
    }
  }

  deleteUser(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      this.userService.deleteUser(id).subscribe(() => {
        alert('User deleted successfully!');
        this.getUsers();
       
      });
    }
  }
  

  editUser(user: any) {
    this.userService.getUserById(user.id).subscribe(user => {
      this.selectedUser = user;
    });
  }
}