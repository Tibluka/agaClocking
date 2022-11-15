import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { DeleteShiftComponent } from 'src/app/components/delete-shift/delete-shift.component';
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

  updateShift(shift: Shift) {
    const modal = this.ngbModal.open(UpdateShiftComponent, { size: 'md', centered: true });
    modal.componentInstance.shiftForm = new FormGroup({
      endShift: new FormControl(moment(this.shiftDate).format('YYYY-MM-DDTHH:mm:ss')),
      startShift: new FormControl(moment(shift.startShift).format('YYYY-MM-DDTHH:mm:ss')),
      activity: new FormControl(shift.activity),
      shiftId: new FormControl(shift._id.$oid),
      overnight: new FormControl(shift.overnight)
    });

    modal.componentInstance.activity = shift.activity;

    modal.componentInstance.startShiftHour = Number(moment(shift.startShift).format('HH'));
    modal.componentInstance.startShiftMinute = Number(moment(shift.startShift).format('mm'));
    if (shift.finished === true) {
      modal.componentInstance.endShiftHour = Number(moment(shift.endShift).format('HH'));
      modal.componentInstance.endShiftMinute = Number(moment(shift.endShift).format('mm'));
    } else {
      modal.componentInstance.endShiftHour = Number(moment(this.shiftDate).format('HH'));
      modal.componentInstance.endShiftMinute = Number(moment(this.shiftDate).format('mm'));
    }
  }


  deleteShift(shift: Shift) {
    const modal = this.ngbModal.open(DeleteShiftComponent, { size: 'md', centered: true });
    modal.componentInstance.shift = shift;
  }

}
