import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-business-questionnaire',
  standalone: true,
  templateUrl: './business-questionnaire.component.html',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet

  ],
  styleUrls: ['./business-questionnaire.component.css'],
})
export class BusinessQuestionnaireComponent {
  formData: any = {
    chickenProducts: [], // Initialize as an empty array
  };

  constructor(private http: HttpClient, private router: Router) { }

  updateCheckbox(event: Event, value: string) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.formData.chickenProducts.push(value);
    } else {
      const index = this.formData.chickenProducts.indexOf(value);
      if (index > -1) {
        this.formData.chickenProducts.splice(index, 1);
      }
    }
  }

  onSubmit() {
    console.log('Form Data:', this.formData); // For debugging
    this.http.post('https://naatukodiappservice.azurewebsites.net/api/BusinessQuestionnaire', this.formData).subscribe({
      next: (response) => {
        alert('Business Questionnaire submitted successfully!');
        this.router.navigate(['/forbusinesses']);
        console.log('Response:', response);
      },
      error: (error) => {
        alert('Failed to submit feedback. Please try again.');
        console.error('Error:', error);
      },
    });
  }
}