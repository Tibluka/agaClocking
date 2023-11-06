import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
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
          },
          {
            path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
          },
          {
            path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
          }
        ]
      }
    ])
  ]
})
export class PagesModule { }
