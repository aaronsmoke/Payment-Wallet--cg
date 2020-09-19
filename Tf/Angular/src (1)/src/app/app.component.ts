import { Component } from '@angular/core';
import { Login } from './login';
import { TransferFundService } from './transferfund.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaymentWallet';
  msg:string;
  errorMsg:string;
  loginflag:boolean=false;
  login:Login = new Login();
  userName:string;
  role:string;
  myimage:string = "assets/images/Wallet.png";
  
  constructor( private transferfundservice:TransferFundService, private router:Router, private storageService:StorageService ){
    if(localStorage.getItem("tokenId")!=null){
       let userstr=localStorage.getItem("tokenId");
       console.log(userstr.split("-")[1]);
       this.userName=this.transferfundservice.decrypt(userstr.split("-")[1]);
       this.loginflag=true;
       this.role=this.transferfundservice.decrypt(userstr.split("-") [2]);
      
     }
    
}
ngOnInit(): void {
  this.storageService.watchStorage().subscribe(data=>{
    console.log(data);
    if(data == "set"){
      console.log("I am true");
      let userstr = localStorage.getItem("tokenId");
      console.log(userstr.split("-") [2]);
      this.userName=this.transferfundservice.decrypt(userstr.split("-")[1]);
      this.role=this.transferfundservice.decrypt(userstr.split("-")[2]);    
      
   this.loginflag=true; 
  }
    else{
     this.loginflag=false;}
  });
 }

 logout(){
   this.transferfundservice.doLogout().subscribe(data=>{
     console.log(data);
     this.storageService.removeItem("tokenId");
     console.log("you have logged out");
    this.loginflag=false;
   }
     
     );
 }

 
}

