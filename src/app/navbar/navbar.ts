import { Component, ChangeDetectorRef } from '@angular/core';
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

  isLoggedIn = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {

    this.auth.isLoggedIn.subscribe((status) => {

      this.isLoggedIn = status;

      this.cdr.detectChanges();

    });

  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}