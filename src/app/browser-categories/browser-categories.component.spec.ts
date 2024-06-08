import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserCategoriesComponent } from './browser-categories.component';

describe('BrowserCategoriesComponent', () => {
  let component: BrowserCategoriesComponent;
  let fixture: ComponentFixture<BrowserCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
