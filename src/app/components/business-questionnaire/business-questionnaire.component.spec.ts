import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFeedbackComponent } from './business-questionnaire.component';

describe('BusinessFeedbackComponent', () => {
  let component: BusinessFeedbackComponent;
  let fixture: ComponentFixture<BusinessFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BusinessFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
