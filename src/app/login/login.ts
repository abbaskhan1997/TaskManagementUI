import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(private auth: Auth) {}

  email: string = '';
password: string = '';


  login() {
  const data = {
    email: this.email,
    password: this.password
  };

 this.auth.login(data).subscribe((response: any) => {
  localStorage.setItem('token', response.token);
  console.log(response);
});
}

}
