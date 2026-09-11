import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { NotFound } from './not-found/not-found';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, NotFound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskManagementUI');

  isNotFound = false;

  constructor(private router: Router) {

  this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {

      const validRoutes = ['/login', '/register', '/home', '/tasks', '/add-task', '/dashboard', '/users'];

      this.isNotFound = !validRoutes.includes(event.urlAfterRedirects);
    });

}


}
