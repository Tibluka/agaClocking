import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitationComponent } from './solicitation.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CustomMultipleSelectModule } from '../../components/custom-multiple-select/custom-multiple-select.module';



@NgModule({
  declarations: [
    SolicitationComponent
  ],
  imports: [
    CommonModule,
    CustomMultipleSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: SolicitationComponent }
    ])
  ]
})
export class SolicitationModule { }
