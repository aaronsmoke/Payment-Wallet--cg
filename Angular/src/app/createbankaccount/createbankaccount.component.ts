import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccount } from '../bankaccount';
import { WalletaccountService } from '../walletaccount.service';
//import { Response } from '@angular/http';

@Component({
  selector: 'app-createbankaccount',
  templateUrl: './createbankaccount.component.html',
  styleUrls: ['./createbankaccount.component.css']
})
export class CreatebankaccountComponent implements OnInit {
  bankAcc:BankAccount = new BankAccount();
  submitted=false;

  constructor(private service:WalletaccountService, private router: Router) { }

  ngOnInit(): void {
  }
  newWallet():void{
    this.submitted=false;
    this.bankAcc = new BankAccount();
  }
  onSubmit(){
    console.log('On submit called here')
    this.submitted=true;
    this.save();
  }
  save(){
    console.log('save called')
    this.service.saveBank(this.bankAcc).subscribe(
      data=>console.log(data),error=>console.log(error));
      this.bankAcc=new BankAccount();
      this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/addbank']);
  }

}
