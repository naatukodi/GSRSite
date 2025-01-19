import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenFarmingComponent } from './chicken-farming.component';

describe('ChickenFarmingComponent', () => {
  let component: ChickenFarmingComponent;
  let fixture: ComponentFixture<ChickenFarmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickenFarmingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenFarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
