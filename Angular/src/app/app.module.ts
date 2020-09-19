import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebankaccountComponent } from './createbankaccount/createbankaccount.component';
import { CreatewalletaccountComponent } from './createwalletaccount/createwalletaccount.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    CreatebankaccountComponent,
    CreatewalletaccountComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
