import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationComponent } from './solicitation.component';

describe('SolicitationComponent', () => {
  let component: SolicitationComponent;
  let fixture: ComponentFixture<SolicitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationComponent]
    });
    fixture = TestBed.createComponent(SolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
