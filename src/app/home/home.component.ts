import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { FeaturesComponent } from "../features/features.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { PlansComponent } from '../plans/plans.component';
import { FaqComponent } from '../faq/faq.component';
import { FooterComponent } from '../footer/footer.component';
import { PartnersComponent } from '../partners/partners.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, AboutComponent, FeaturesComponent, TestimonialsComponent,HowItWorksComponent,PlansComponent, FaqComponent, PartnersComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
