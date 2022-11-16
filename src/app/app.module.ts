import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewShiftComponent } from './components/new-shift/new-shift.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateShiftComponent } from './components/update-shift/update-shift.component';


import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { DeleteShiftComponent } from './components/delete-shift/delete-shift.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingModule } from './components/loading/loading.module';
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NewShiftComponent,
    UpdateShiftComponent,
    DeleteShiftComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HammerModule,
    LoadingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          {
            path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
          },
          {
            path: '', canActivate: [AuthGuardService], loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
          }

        ]
      }
    ]),
    NgbModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
