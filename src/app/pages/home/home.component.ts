import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { UpdateShiftComponent } from 'src/app/components/update-shift/update-shift.component';
import { Shift } from 'src/app/models/shifts';
import { ShiftsService } from 'src/app/services/shifts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today: Date = new Date();

  get shifts() {
    return this.shiftsService.shifts;
  }

  get shiftDate() {
    return this.shiftsService.date;
  }

  constructor(private shiftsService: ShiftsService,
    private ngbModal: NgbModal) {
    this.shiftsService.listShifts();
  }

  ngOnInit(): void {
  }

  calculateDifference(shift: Shift) {
    let startShift = new Date(shift.startShift);
    let endShift = new Date(shift.endShift);
    if (shift.finished) {
      var diffMs = (endShift.getTime() - startShift.getTime());
      var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      return `${diffHrs}:${diffMins}hr`;
    } else {
      return 'Aberto';
    }
  }

  isToday() {
    let today = new Date(this.today).setHours(0);
    let shiftDate = new Date(this.shiftDate).setHours(0);
    if (new Date(today).getDate() === new Date(shiftDate).getDate()) {
      return true;
    }
    return false;
  }

  previousShiftDate() {
    this.shiftsService.previousShiftDate();
  }

  nextShiftDate() {
    this.shiftsService.nextShiftDate();
  }

  terminateShift(shift: Shift) {
    const modal = this.ngbModal.open(UpdateShiftComponent, { size: 'md', centered: true });
    modal.componentInstance.shiftForm = new FormGroup({
      endShift: new FormControl(moment(this.shiftDate).format('YYYY-MM-DDTHH:mm:ss')),
      shiftId: new FormControl(shift._id.$oid)
    });
    modal.componentInstance.hour = this.today.getHours();
    modal.componentInstance.minute = this.today.getMinutes();
  }

}
