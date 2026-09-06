import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Tasks } from './tasks/tasks';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },

  {
    path: 'register',
    component: Register,
  },

  {
    path: 'tasks',
    component: Tasks,
  },
];
