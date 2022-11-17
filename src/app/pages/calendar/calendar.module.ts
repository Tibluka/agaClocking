import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CalendarComponent }
    ])
  ], 
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    }
  ]
})
export class CalendarModule { }
