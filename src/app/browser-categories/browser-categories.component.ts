import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-browser-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browser-categories.component.html',
  styleUrl: './browser-categories.component.scss',
})
export class BrowserCategoriesComponent {
  courses = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Python',
    'Ruby',
    'TypeScript',
    'Sass',
    'Less',
    'Swift',
  ];
}
