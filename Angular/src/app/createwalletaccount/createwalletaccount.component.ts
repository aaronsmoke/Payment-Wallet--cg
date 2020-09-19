import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Walletaccount } from '../walletaccount';
import { WalletaccountService } from '../walletaccount.service';

@Component({
  selector: 'app-createwalletaccount',
  templateUrl: './createwalletaccount.component.html',
  styleUrls: ['./createwalletaccount.component.css']
})
export class CreatewalletaccountComponent implements OnInit {
  walletAcc:Walletaccount = new Walletaccount();
  submitted=false;

  constructor(private service:WalletaccountService, private router: Router) { }

  ngOnInit(): void {
  }
  newWallet():void{
    this.submitted=false;
    this.walletAcc=new Walletaccount();
  }
  onSubmit(){
    console.log('On submit called here')
    this.submitted=true;
    this.save();
  }
  
  save(){
    console.log('save called')
    this.service.saveWallet(this.walletAcc).subscribe(
      data=>console.log(data),error=>console.log(error));
      this.walletAcc=new Walletaccount();
      this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/addwallet']);
  }

}
