import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  features = [
    {
      title: 'Automated Savings',
      description: 'Set it and forget it—SmartSave automatically moves money into your savings goals.',
      icon: `<svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"/>
               <path stroke-linecap="round" stroke-linejoin="round"
                     d="M19 12c0 7-7 9-7 9s-7-2-7-9a7 7 0 1114 0z"/>
             </svg>`
    },
    {
      title: 'Goal Tracking',
      description: 'Track progress toward personal savings goals with visual insights.',
      icon: `<svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round"
                     d="M11 19V6m4 13V9m4 10V4M5 19v-4"/>
             </svg>`
    },
    {
      title: 'Secure & Transparent',
      description: 'Bank-level encryption ensures your data and funds stay protected.',
      icon: `<svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 11c1.657 0 3-1.343 3-3V4a3 3 0 00-6 0v4c0 1.657 1.343 3 3 3z"/>
               <path stroke-linecap="round" stroke-linejoin="round"
                     d="M5 20h14a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"/>
             </svg>`
    }
  ];
}
