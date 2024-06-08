import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingCourseComponent } from './top-selling-course.component';

describe('TopSellingCourseComponent', () => {
  let component: TopSellingCourseComponent;
  let fixture: ComponentFixture<TopSellingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSellingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSellingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
