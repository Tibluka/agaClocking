import { Component, Input, OnInit } from '@angular/core';
import { Shift } from 'src/app/models/shifts';

@Component({
  selector: 'app-shift-item',
  templateUrl: './shift-item.component.html',
  styleUrls: ['./shift-item.component.scss']
})
export class ShiftItemComponent implements OnInit {

  @Input() shift: Shift = new Shift();

  constructor() { }

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


}
