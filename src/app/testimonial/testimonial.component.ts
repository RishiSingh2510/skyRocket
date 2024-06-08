import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  testimonials = [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      authorName: 'Simran Kalra',
      authorTitle: 'Software Engineer',
      authorImage: 'assets/images/author1.png',
    },
    {
      quote:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      authorName: 'Suhani Jain',
      authorTitle: 'Student',
      authorImage: 'assets/images/author2.png',
    },
  ];

  rating = 4.5;
  totalReviews = 1724;
  stars = [1, 2, 3, 4, 5];
}
