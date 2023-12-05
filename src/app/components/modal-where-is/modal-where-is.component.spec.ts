import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWhereIsComponent } from './modal-where-is.component';

describe('ModalWhereIsComponent', () => {
  let component: ModalWhereIsComponent;
  let fixture: ComponentFixture<ModalWhereIsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalWhereIsComponent]
    });
    fixture = TestBed.createComponent(ModalWhereIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
