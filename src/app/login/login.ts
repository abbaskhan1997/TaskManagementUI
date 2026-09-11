import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  email: string = '';
  password: string = '';

  login() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.auth.login(data).subscribe((response: any) => {
      
      localStorage.setItem('token', response.token);

      this.auth.isLoggedIn.next(true);

      const role = this.auth.getRole();

      if (role === 'Admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }

      console.log(response);
    });
  }
}
