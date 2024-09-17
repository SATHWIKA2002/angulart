

//import { Routes } from '@angular/router';

//export const routes: Routes = [];
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ValidationComponent } from './validation/validation.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'validation', component: ValidationComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


