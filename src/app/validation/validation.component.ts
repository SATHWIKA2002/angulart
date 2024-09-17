import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-validation', // Ensure the selector reflects the new feature name
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent { // Renamed the class to ValidationComponent
  accuracy: number = 95;     // Example values for validation metrics
  conciseness: number = 88;
  relevance: number = 92;

  constructor(private router: Router) {}

  // Method to navigate back to the dashboard
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

