import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ChickenService, Chicken, HealthRecord } from '../services/chicken.service';

// Optional interface to store grouped records
interface GroupedRecords {
  period: string;        // e.g., "2025-01" if grouping by month
  records: HealthRecord[];
}

@Component({
  selector: 'app-chicken-detail',
  templateUrl: './chicken-detail.component.html',
  styleUrls: ['./chicken-detail.component.scss'],
  imports: [CommonModule, RouterLink, RouterOutlet]
})
export class ChickenDetailComponent implements OnInit {
  chicken: Chicken | null = null;
  errorMessage: string = '';

  // This array will hold grouped records (by month or week)
  groupedRecords: GroupedRecords[] = [];

  constructor(
    private route: ActivatedRoute,
    private chickenService: ChickenService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.chickenService.getChickenById(id).subscribe({
        next: (data) => {
          this.chicken = data;
          // Group the health records after fetching the chicken data
          this.groupHealthRecords(data.healthRecords);
        },
        error: (error) => {
          console.error('Error fetching chicken details:', error);
          this.errorMessage = 'Could not load chicken details.';
        }
      });
    }
  }

  /**
   * Groups the health records by month (YYYY-MM).
   * You can modify this logic to group by week or any other period.
   */
  private groupHealthRecords(records: HealthRecord[]): void {
    const map = new Map<string, HealthRecord[]>();

    records.forEach((record) => {
      const date = new Date(record.date);
      // For monthly grouping:
      const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;

      // If you want weekly grouping instead, you might do something like:
      // const oneWeek = 7 * 24 * 60 * 60 * 1000;
      // const weekNumber = Math.floor(
      //   (date.getTime() - new Date(date.getFullYear(), 0, 1).getTime()) / oneWeek
      // );
      // const weekKey = `${date.getFullYear()}-W${weekNumber}`;

      if (!map.has(monthKey)) {
        map.set(monthKey, []);
      }
      map.get(monthKey)!.push(record);
    });

    // Convert the map into an array of objects with period & records
    this.groupedRecords = Array.from(map, ([period, recs]) => ({
      period,
      records: recs,
    }));

    // Optional: sort the groupedRecords by period (ascending)
    this.groupedRecords.sort((a, b) => a.period.localeCompare(b.period));
  }
}
