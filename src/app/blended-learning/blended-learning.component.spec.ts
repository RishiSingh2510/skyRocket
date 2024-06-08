import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendedLearningComponent } from './blended-learning.component';

describe('BlendedLearningComponent', () => {
  let component: BlendedLearningComponent;
  let fixture: ComponentFixture<BlendedLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlendedLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlendedLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
