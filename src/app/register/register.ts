import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {

  constructor(private auth: Auth) {}

  name: string = '';
email: string = '';
password: string = '';
role: string = 'User';

  register() {
  const data = {
    name: this.name,
    email: this.email,
    password: this.password,
    role: this.role
  };

  this.auth.register(data).subscribe(response => {
    console.log(response);
  });
}
}
