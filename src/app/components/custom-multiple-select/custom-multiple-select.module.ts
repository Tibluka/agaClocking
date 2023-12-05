import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMultipleSelectComponent } from './custom-multiple-select.component';



@NgModule({
  declarations: [
    CustomMultipleSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomMultipleSelectComponent
  ]
})
export class CustomMultipleSelectModule { }
