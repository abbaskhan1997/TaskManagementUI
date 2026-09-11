import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Tasks } from './tasks/tasks';
import { AddTask } from './add-task/add-task';
import { Home } from './home/home';
import { authGuard } from './guards/auth-guard';
import { NotFound } from './not-found/not-found';
import { Users } from './admin/users/users';
import { Dashboard } from './admin/dashboard/dashboard';

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
    canActivate: [authGuard],
  },

  {
    path: 'add-task',
    component: AddTask,
    canActivate: [authGuard],
  },

  {
    path: 'home',
    component: Home,
    canActivate: [authGuard],
  },

  {
  path: 'users',
  component: Users,
  canActivate: [authGuard]
},

  {
  path: 'dashboard',
  component: Dashboard,
  canActivate: [authGuard]
},

{
  path: '**',
  component: NotFound
}



];
