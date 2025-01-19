import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-farmer-registration',
  standalone: true,
  templateUrl: './farmer-registration.component.html',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet
  ],
  styleUrls: ['./farmer-registration.component.css'],
})
export class FarmerRegistrationComponent {
  formData: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.http.post('https://naatukodiappservice.azurewebsites.net/api/FarmerRegistration', this.formData).subscribe({
      next: (response) => {
        alert('Farmer Registered Successfully!');
        this.router.navigate(['/forfarmers']);
        console.log('Response:', response);
      },
      error: (error) => {
        alert('Failed to register farmer. Please try again.');
        console.error('Error:', error);
      },
    });
  }
}