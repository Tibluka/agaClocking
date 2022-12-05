import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { GraphicsComponent } from './graphics.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GraphicsComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: GraphicsComponent }
    ])
  ]
})
export class GraphicsModule { }
