import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Model bound to the form
  model = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  // API endpoint to submit contactus message
  private apiUrl = 'https://naatukodiappservice.azurewebsites.net/api/ContactMessage/submit';

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Build the payload. The backend expects:
    // { Name, Email, Phone, Message }
    const payload = {
      Name: this.model.name,
      Email: this.model.email,
      Phone: this.model.phone, // This is used as the customer id in the backend
      Message: this.model.message,
      CustomerId: this.model.phone  // Map phone to CustomerId automatically
    };

    this.http.post(this.apiUrl, payload).subscribe({
      next: (response) => {
        alert('Message submitted successfully!');
        console.log('Response:', response);
        // Optionally, reset the form fields
        this.model = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
      },
      error: (error) => {
        alert('Failed to submit message. Please try again.');
        console.error('Error:', error);
      }
    });
  }
}
