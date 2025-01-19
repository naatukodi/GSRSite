import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistrationComponent } from './farmer-registration.component';

describe('FarmerRegistrationComponent', () => {
  let component: FarmerRegistrationComponent;
  let fixture: ComponentFixture<FarmerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
