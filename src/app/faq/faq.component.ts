import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
   faqs = [
    {
      question: 'Is SmartSave secure?',
      answer:
        'Absolutely. SmartSave uses bank-level encryption and security standards to protect your data and funds.',
      open: false,
    },
    {
      question: 'Can I withdraw early?',
      answer:
        'Yes, you can withdraw your funds at any time, depending on your savings plan. There are no hidden fees.',
      open: false,
    },
    {
      question: 'How does auto-saving work?',
      answer:
        'You set a savings goal and SmartSave automatically saves a chosen amount at your preferred frequency.',
      open: false,
    },
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
