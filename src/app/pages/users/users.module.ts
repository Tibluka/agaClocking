import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UserItemModule } from 'src/app/components/user-item/user-item.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserItemModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent }
    ])
  ]
})
export class UsersModule { }
