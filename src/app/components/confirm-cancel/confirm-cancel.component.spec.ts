import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCancelComponent } from './confirm-cancel.component';

describe('ConfirmCancelComponent', () => {
  let component: ConfirmCancelComponent;
  let fixture: ComponentFixture<ConfirmCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmCancelComponent]
    });
    fixture = TestBed.createComponent(ConfirmCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
