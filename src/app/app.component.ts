import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BlendedLearningComponent } from './blended-learning/blended-learning.component';
import { BrowserCategoriesComponent } from './browser-categories/browser-categories.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TopSellingCourseComponent } from './top-selling-course/top-selling-course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderBarComponent,
    BannerComponent,
    TopSellingCourseComponent,
    BrowserCategoriesComponent,
    FooterBarComponent,
    CollaborationComponent,
    BlendedLearningComponent,
    TestimonialComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skyRocket';
}
