import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [RouterLink, AsyncPipe],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  isLoggedIn$: any;
  isAdmin = false;

  constructor(
    private auth: Auth,
    public router: Router
  ) {

    this.isLoggedIn$ = this.auth.isLoggedIn.asObservable();

    this.auth.isLoggedIn.subscribe(() => {
  this.isAdmin = this.auth.getRole() === 'Admin';
});

  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}