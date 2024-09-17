import { Component, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule to imports
})
export class DashboardComponent {
  query: string = '';
  messages: { type: string; text: string }[] = [];
  userMessage: string = '';

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

 
  navigateToValidation(): void {
    this.router.navigate(['/validation']); // Ensure this matches the route in app.routes.ts
  }

 

  focusSearchInput(): void {
    this.searchInput.nativeElement.focus();
  }

 

  sendMessage(): void {
    if (this.userMessage.trim()) {
      this.messages.push({ type: 'user', text: this.userMessage });
      this.botResponse(this.userMessage);
      this.userMessage = ''; // Clear input field after sending message
    }
  }

  botResponse(userMessage: string): void {
    setTimeout(() => {
      this.messages.push({
        type: 'bot',
        text: `I'm still learning, but here's a response to "${userMessage}"`
      });
    }, 1000);
  }
}
