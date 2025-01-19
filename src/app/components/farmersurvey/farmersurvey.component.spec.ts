import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersurveyComponent } from './farmersurvey.component';

describe('FarmersurveyComponent', () => {
  let component: FarmersurveyComponent;
  let fixture: ComponentFixture<FarmersurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmersurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmersurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
