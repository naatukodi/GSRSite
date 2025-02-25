import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailSurveyComponent } from './retail-survey.component';

describe('RetailSurveyComponent', () => {
  let component: RetailSurveyComponent;
  let fixture: ComponentFixture<RetailSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailSurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
