import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWhereIsComponent } from './components/modal-where-is/modal-where-is.component';
import { SuccessComponent } from './components/success/success.component';
import { FormsModule } from '@angular/forms';
import { ConfirmCancelComponent } from './components/confirm-cancel/confirm-cancel.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { LoadingInterceptorService } from './services/interceptor/loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalWhereIsComponent,
    SuccessComponent,
    ConfirmCancelComponent,
    InfoModalComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
