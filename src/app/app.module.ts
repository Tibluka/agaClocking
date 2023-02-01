import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Hammer from 'hammerjs';
import { AppComponent } from './app.component';
import { DeleteShiftComponent } from './components/delete-shift/delete-shift.component';
import { LoadingModule } from './components/loading/loading.module';
import { NewShiftComponent } from './components/new-shift/new-shift.component';
import { UpdateShiftComponent } from './components/update-shift/update-shift.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { InterceptorService } from './services/interceptor.service';

registerLocaleData(localePt);

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
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
