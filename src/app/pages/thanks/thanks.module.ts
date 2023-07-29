import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanksComponent } from './thanks.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ThanksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ThanksComponent }
    ])
  ]
})
export class ThanksModule { }
