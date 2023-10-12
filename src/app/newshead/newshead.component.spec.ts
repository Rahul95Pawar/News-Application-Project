import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsheadComponent } from './newshead.component';

describe('NewsheadComponent', () => {
  let component: NewsheadComponent;
  let fixture: ComponentFixture<NewsheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsheadComponent]
    });
    fixture = TestBed.createComponent(NewsheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
