import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransferFundComponent} from './transferfund/transferfund.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'transfer', component:TransferFundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
