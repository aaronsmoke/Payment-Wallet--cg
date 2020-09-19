import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatebankaccountComponent } from './createbankaccount/createbankaccount.component';
import { CreatewalletaccountComponent } from './createwalletaccount/createwalletaccount.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'addwallet',component:CreatewalletaccountComponent},
  {path:'addbank',component:CreatebankaccountComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
