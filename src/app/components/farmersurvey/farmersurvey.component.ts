import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-farmersurvey',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './farmersurvey.component.html',
  styleUrl: './farmersurvey.component.scss'
})
export class FarmersurveyComponent {
  // Dropdown options
  rearingMethodOptions = ['Free-range', 'Farm-based', 'Others'];
  chickenCountOptions = ['0-50', '50-100', '100-500', 'More than 500'];
  monthlySalesOptions = ['0-50', '50-100', '100-500', 'More than 500'];

  // Multiple checkboxes options
  feedMaterialOptions = ['Commercial feed', 'Wheat', 'Pulses', 'Others'];
  healthPracticesOptions = [
    'Disease prevention',
    'Regular health check-ups',
    'Vaccinations',
    'Others',
  ];
  sellingMethodOptions = [
    'Direct to consumer',
    'Wholesale',
    'Restaurants',
    'Others',
  ];
  vetSupportTypeOptions = [
    'Regular health check-ups',
    'Emergency care',
    'Vaccination programs',
  ];
  assistanceRequiredOptions = [
    'Feeding methods',
    'Disease prevention',
    'Marketing',
  ];

  // Initialize form data
  formData: {
    // Removed id and CustomerId fields
    Type: string;
    Name: string;
    Location: string;
    phonenumber: string; // renamed from ContactInfo
    CustomerId?: string; // optional field for CustomerId
    ChickenBreeds: string;
    RearingMethod: string;
    ChickenCount: string;
    MonthlySales: string;
    FeedMaterials: string | string[];
    HealthPractices: string | string[];
    HasVetAccess: boolean;
    SellingMethods: string | string[];
    SupplyDirectlyToMarket: boolean;
    MarketRequirements: string;
    InterestedInBuyBack: boolean;
    BuyBackChickenCount: string;
    InterestedInVetSupport: boolean;
    VetSupportType: string | string[];
    AssistanceRequired: string | string[];
    FacingChallenges: boolean;
    ChallengeDetails: string;
    ExploringNewMethods: boolean;
    GettingFairPrice: boolean;
    PriceIssues: string;
    Suggestions: string;
  } = {
      Type: 'FarmerQuestionnaire',
      Name: '',
      Location: '',
      phonenumber: '',
      ChickenBreeds: '',
      RearingMethod: '',             // dropdown
      ChickenCount: '',              // dropdown
      MonthlySales: '',              // dropdown
      FeedMaterials: '',
      HealthPractices: '',
      HasVetAccess: false,
      SellingMethods: '',
      SupplyDirectlyToMarket: false,
      MarketRequirements: '',
      InterestedInBuyBack: false,
      BuyBackChickenCount: '',
      InterestedInVetSupport: false,
      VetSupportType: '',
      AssistanceRequired: '',
      FacingChallenges: false,
      ChallengeDetails: '',
      ExploringNewMethods: false,
      GettingFairPrice: false,
      PriceIssues: '',
      Suggestions: '',
    };

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Toggle item in a comma-separated string field
   * (FeedMaterials, HealthPractices, SellingMethods, VetSupportType, AssistanceRequired).
   */
  toggleSelection(
    fieldName: keyof Pick<
      typeof this.formData,
      'FeedMaterials' | 'HealthPractices' | 'SellingMethods' | 'VetSupportType' | 'AssistanceRequired'
    >,
    option: string
  ) {
    const currentValue = typeof this.formData[fieldName] === 'string' ? this.formData[fieldName] : '';
    let selectedValues = currentValue ? currentValue.split(',') : [];

    if (selectedValues.includes(option)) {
      // Remove if already selected
      selectedValues = selectedValues.filter((val) => val !== option);
    } else {
      // Otherwise add it
      selectedValues.push(option);
    }

    // Rebuild comma-separated string
    this.formData[fieldName] = selectedValues.join(',');
  }

  /**
   * Check if an option is selected in a comma-separated string.
   */
  isSelected(fieldName: keyof typeof this.formData, option: string): boolean {
    if (!this.formData[fieldName]) {
      return false;
    }
    return (
      typeof this.formData[fieldName] === 'string' &&
      this.formData[fieldName].split(',').includes(option)
    );
  }

  onSubmit() {
    // Create a copy of formData to transform as needed
    const payload = { ...this.formData };

    // Convert comma-separated fields to arrays for the backend
    payload.FeedMaterials = typeof payload.FeedMaterials === 'string'
      ? payload.FeedMaterials.split(',')
      : [];
    payload.HealthPractices = typeof payload.HealthPractices === 'string'
      ? payload.HealthPractices.split(',')
      : [];
    payload.SellingMethods = typeof payload.SellingMethods === 'string'
      ? payload.SellingMethods.split(',')
      : [];
    payload.VetSupportType = typeof payload.VetSupportType === 'string'
      ? payload.VetSupportType.split(',')
      : [];
    payload.AssistanceRequired = typeof payload.AssistanceRequired === 'string'
      ? payload.AssistanceRequired.split(',')
      : [];

    // Map the provided phonenumber to the expected CustomerId field
    // (Even though the form no longer has a CustomerId field, we set it here for the POST request.)
    payload['CustomerId'] = payload.phonenumber;

    console.log('Submitting form data:', payload);

    // Post the payload to the server
    this.http
      .post('https://naatukodiappservice.azurewebsites.net/api/farmer/submit', payload)
      .subscribe({
        next: (response) => {
          alert('Questionnaire submitted successfully!');
          this.router.navigate(['/forfarmers']);
          console.log('Server response:', response);
        },
        error: (error) => {
          alert('Failed to submit the questionnaire. Please try again.');
          console.error('Error from server:', error);
        },
      });
  }
}
