import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { LoadingModule } from '../components/loading/loading.module';



@NgModule({
  declarations: [
    PagesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    RouterModule.forChild([{
      path: '', component: PagesComponent,
      children: [
        { path: '', loadChildren: () => import('./coverage/coverage.module').then(m => m.CoverageModule) },
        { path: 'solicitation', loadChildren: () => import('./solicitation/solicitation.module').then(m => m.SolicitationModule) },
        { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }
      ]
    }
    ])
  ]
})
export class PagesModule { }
