import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
   partners = [
    { name: 'Bank A', logo: 'assets/partners/bank-a.png' },
    { name: 'Bank B', logo: 'assets/partners/bank-b.png' },
    { name: 'Processor X', logo: 'assets/partners/processor-x.png' },
    { name: 'Wallet Y', logo: 'assets/partners/wallet-y.png' },
    { name: 'Finance Co', logo: 'assets/partners/finance-co.png' }
  ];
}
