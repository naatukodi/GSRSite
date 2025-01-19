import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forfarmers',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './forfarmers.component.html',
  styleUrl: './forfarmers.component.scss'
})
export class ForfarmersComponent {

}
