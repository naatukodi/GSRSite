import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HealthRecord {
  date: Date;
  weight: number;
  appetite: boolean;
  vaccinated: boolean;
  notes: string;
}

export interface Chicken {
  id: string;
  type: string;
  chickenId: string;
  name: string;
  breed: string;
  weight: number;
  dateOfBirth: Date;
  customerId: string;
  healthRecords: HealthRecord[];
  batchId: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChickenService {
  private apiUrl = 'https://naatukodiappservice.azurewebsites.net/api/Chickens';
  private customerId = '9620027500';

  constructor(private http: HttpClient) {}

  getChickenById(id: string): Observable<Chicken> {
    // Construct the endpoint with the given chicken id and customerId query parameter.
    const url = `${this.apiUrl}/${id}?customerId=${this.customerId}`;
    return this.http.get<Chicken>(url);
  }
}
