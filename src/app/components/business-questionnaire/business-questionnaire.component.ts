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
    // Removed CustomerId from formData
    // Using "phonenumber" instead of "phoneOrEmail"
    phonenumber: '',
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
    // Create a copy of formData to modify the payload as needed
    const payload = { ...this.formData };

    // Map the provided phonenumber to the expected CustomerId field for the POST request
    payload['CustomerId'] = payload.phonenumber;

    console.log('Form Data:', payload); // For debugging

    this.http.post('https://naatukodiappservice.azurewebsites.net/api/BusinessQuestionnaire', payload).subscribe({
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
