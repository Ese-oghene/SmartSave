import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

   testimonials = [
    {
      name: 'Jane Doe',
      role: 'Freelancer',
      message: 'SmartSave helped me finally stay consistent with saving. I hit my emergency fund goal in 6 months!',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5
    },
    {
      name: 'Mark Johnson',
      role: 'Entrepreneur',
      message: 'The automated deposits are life-changing. I don’t even think about it, and my savings keep growing.',
      avatar: 'https://i.pravatar.cc/100?img=2',
      rating: 4
    },
    {
      name: 'Aisha Bello',
      role: 'Student',
      message: 'I love the interface. It’s clean, and I can see my goals clearly. Feels great watching them fill up.',
      avatar: 'https://i.pravatar.cc/100?img=3',
      rating: 5
    }
  ];
}
