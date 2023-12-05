import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverageComponent } from './coverage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConsultComponent } from './consult/consult.component';
import { RequestComponent } from './request/request.component';
import { NgxMaskModule } from 'ngx-mask';
import { CustomMultipleSelectModule } from '../../components/custom-multiple-select/custom-multiple-select.module';



@NgModule({
  declarations: [
    CoverageComponent,
    ConsultComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMultipleSelectModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: CoverageComponent }
    ])
  ]
})
export class CoverageModule { }
