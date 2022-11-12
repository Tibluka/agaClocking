import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Shift } from 'src/app/models/shifts';
import { ShiftsService } from 'src/app/services/shifts.service';
import { NewShiftComponent } from '../new-shift/new-shift.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  get shiftDate() {
    return this.shiftsService.date;
  }

  get shifts() {
    return this.shiftsService.shifts;
  }

  constructor(private modal: NgbModal,
    private shiftsService: ShiftsService) { }

  ngOnInit(): void {
  }

  newShift() {
    const pendingShifts = this.shifts.find((shift: Shift) => !shift.finished);
    if (pendingShifts) {
      alert('Ainda há um turno em aberto. Finalize para que possa iniciar um novo turno.')
      return;
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const modal = this.modal.open(NewShiftComponent, { size: 'sm', centered: true });
    modal.componentInstance.shiftForm = new FormGroup({
      startShift: new FormControl(moment(this.shiftDate).format('YYYY-MM-DDTHH:mm:ss')),
      activity: new FormControl('', Validators.required),
      project: new FormControl('', Validators.required),
      endShift: new FormControl(''),
      finished: new FormControl(false),
      userId: new FormControl(user.id)
    });
    modal.componentInstance.hour = this.shiftDate.getHours();
    modal.componentInstance.minute = this.shiftDate.getMinutes();
  }

}
