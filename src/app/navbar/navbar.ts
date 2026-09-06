import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  constructor(private auth: Auth, 
    private router: Router) {}

  logout() {
    this.auth.logout();
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
