import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-business-registration',
  standalone: true,
  templateUrl: './business-registration.component.html',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet
  ],
  styleUrls: ['./business-registration.component.css'],
})
export class BusinessRegistrationComponent {
  formData: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.http.post('https://naatukodiappservice.azurewebsites.net/api/BusinessRegistration', this.formData).subscribe({
      next: (response) => {
        alert('Business Registered Successfully!');
        this.router.navigate(['/forbusinesses']);
        console.log('Response:', response);
      },
      error: (error) => {
        alert('Failed to register business. Please try again.');
        console.error('Error:', error);
      },
    });
  }
}
