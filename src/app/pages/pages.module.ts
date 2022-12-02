import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: PagesComponent,
        children: [
          {
            path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
          },
          {
            path: 'graphics', loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule)
          }
        ]
      }
    ])
  ]
})
export class PagesModule { }
