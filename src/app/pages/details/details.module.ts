import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: DetailsComponent }
    ])
  ]
})
export class DetailsModule { }
