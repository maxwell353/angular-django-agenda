import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticador/login/login.component';
import { Constantes } from './util/constantes';
import { HomeComponent } from './paginas/home/home.component';
import { InterceptadorRequest } from './util/interceptador.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    Constantes,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptadorRequest, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
