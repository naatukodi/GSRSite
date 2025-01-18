import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfarmersComponent } from './forfarmers.component';

describe('ForfarmersComponent', () => {
  let component: ForfarmersComponent;
  let fixture: ComponentFixture<ForfarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForfarmersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
