import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsComponent } from './graphics.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GraphicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: GraphicsComponent }
    ])
  ]
})
export class GraphicsModule { }
