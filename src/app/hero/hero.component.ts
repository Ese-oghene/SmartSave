import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  slides = [
    {
      title: 'Save Smart, Live Better',
      description: 'Automated savings to help you reach your financial goals effortlessly.',
      image: 'assets/images/think.png'
    },
    {
       title: 'Plan for the Future',
      description: 'SmartSave helps you budget and grow wealth consistently.',
      image: 'assets/images/What.png'
    },
    {
       title: 'Secure & Transparent',
      description: 'Your savings are protected with bank-level security and transparency.',
      image: 'assets/images/How.png'
    }
  ];

   currentSlide = 0;
    previousSlide = 0;
    intervalid: any;

    ngOnInit(): void {
      this.startAutoSlide();
    }

    ngOnDestroy(): void {
      clearInterval(this.intervalid)
    }

    nextSlide(){
      this.previousSlide = this.currentSlide;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }

    prevSlide() {
      this.previousSlide = this.currentSlide;
      this.currentSlide = (this.currentSlide -1 + this.slides.length) % this.slides.length
    }

    goToSlide(index:number) {
      this.previousSlide = this.currentSlide;
      this.currentSlide = index;
    }

    startAutoSlide() {
      this.intervalid = setInterval(() => this.nextSlide(), 7000)
    }

    getTransform(i: number): string {
      const offset = (i - this.currentSlide) * 100; return `translatex(${offset}%)`
    }



}
