import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item.component';



@NgModule({
  declarations: [
    UserItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserItemComponent
  ]
})
export class UserItemModule { }
