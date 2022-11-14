import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Shift } from 'src/app/models/shifts';
import { ShiftsService } from 'src/app/services/shifts.service';

@Component({
  selector: 'app-delete-shift',
  templateUrl: './delete-shift.component.html',
  styleUrls: ['./delete-shift.component.scss']
})
export class DeleteShiftComponent implements OnInit {

  get shiftDate() {
    return this.shiftsService.date;
  }

  shift: Shift = new Shift();

  constructor(private shiftsService: ShiftsService,
    private ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cancel() {
    this.ngbActiveModal.close();
  }

  async deleteShift() {
    await this.shiftsService.deleteShift(this.shift);
    this.ngbActiveModal.close();
  }

}
