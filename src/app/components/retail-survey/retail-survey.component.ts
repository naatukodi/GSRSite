import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retail-survey',
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './retail-survey.component.html',
  styleUrl: './retail-survey.component.scss'
})
export class RetailSurveyComponent implements OnInit {
  surveyForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      // Section 1: Demographic & Lifestyle Information
      ageGroup: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
      lifestyle: [''],
      purchaseFrequency: ['', Validators.required],

      // Section 2: Product Awareness & Purchasing Behavior
      organicAwareness: ['', Validators.required],
      chickenPurchaseFrequency: ['', Validators.required],
      purchaseDrivers: this.fb.group({
        price: [false],
        organicCertification: [false],
        animalWelfare: [false],
        traceability: [false],
        tasteQuality: [false],
        variety: [false],
        other: ['']
      }),

      // Section 3: Product Features & Value Perception
      transparency: ['', Validators.required],
      qrIntegration: ['', Validators.required],
      productVarieties: this.fb.group({
        authentic: [false],
        giriraj: [false],
        sonali: [false],
        notSure: [false]
      }),

      // Section 4: Price Sensitivity & Purchase Intent
      pricePointAcceptance: [''],
      qualityResponse: [''],
      perceivedValue: ['', Validators.required],

      // Section 5: Open-Ended Feedback
      suggestions: [''],
      finalComments: ['']
    });
  }

  onSubmit(): void {
    if (this.surveyForm.valid) {
      const formData = {
        recordType: 'retailsurvey',  // updated record type
        ...this.surveyForm.value
      };

      this.http.post('/api/retailsurvey', formData)
        .subscribe(response => {
          console.log('Survey submitted successfully', response);
        }, error => {
          console.error('Error submitting survey', error);
        });
    }
  }
}
