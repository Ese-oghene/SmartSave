import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   currentYear: number = new Date().getFullYear();
  email: string = '';

  subscribe() {
    if (this.email) {
      console.log('Subscribed with:', this.email);
      this.email = '';
    }
  }
}
