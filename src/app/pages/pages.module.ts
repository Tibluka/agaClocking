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
            path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          }
        ]
      }
    ])
  ]
})
export class PagesModule { }
