import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PlansComponent } from "./plans/plans.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, HowItWorksComponent, AboutComponent, FeaturesComponent, TestimonialsComponent, PlansComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-project';

  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const html = document.documentElement;

    if (this.darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
