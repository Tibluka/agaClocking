import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewShiftComponent } from '../new-shift/new-shift.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  newShift() {
    const modal = this.modal.open(NewShiftComponent, { size: 'md', centered: true });
  }

}
