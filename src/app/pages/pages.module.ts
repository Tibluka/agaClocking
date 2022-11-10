import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: PagesComponent,
        children: [
          {
            path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          }
        ]
      }
    ])
  ]
})
export class PagesModule { }
