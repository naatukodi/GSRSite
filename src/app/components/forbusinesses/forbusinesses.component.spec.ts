import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbusinessesComponent } from './forbusinesses.component';

describe('ForbusinessesComponent', () => {
  let component: ForbusinessesComponent;
  let fixture: ComponentFixture<ForbusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbusinessesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
