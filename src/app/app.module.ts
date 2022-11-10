import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewShiftComponent } from './components/new-shift/new-shift.component';

@NgModule({
  declarations: [
    AppComponent,
    NewShiftComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          {
            path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
          },
          {
            path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
          }
          
        ]
      }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
