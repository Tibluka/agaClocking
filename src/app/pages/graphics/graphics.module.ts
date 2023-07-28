import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsComponent } from './graphics.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GraphicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: GraphicsComponent }
    ])
  ]
})
export class GraphicsModule { }
