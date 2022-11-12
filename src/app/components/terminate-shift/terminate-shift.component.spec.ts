import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateShiftComponent } from './terminate-shift.component';

describe('TerminateShiftComponent', () => {
  let component: TerminateShiftComponent;
  let fixture: ComponentFixture<TerminateShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminateShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
