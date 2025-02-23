import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenDetailComponent } from './chicken-detail.component';

describe('ChickenDetailComponent', () => {
  let component: ChickenDetailComponent;
  let fixture: ComponentFixture<ChickenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickenDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
