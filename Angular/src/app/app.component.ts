import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { StorageService } from './storage.service';
import { WalletaccountService } from './walletaccount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paymentwallet';
  msg:string;
  errorMsg:string;
  loginflag:boolean=false;
  login:Login = new Login();
  userName:string;
  role:string;
  
  constructor( private walletaccountservice: WalletaccountService, private router:Router, private storageService:StorageService ){
    if(localStorage.getItem("tokenId")!=null){
       let userstr=localStorage.getItem("tokenId");
       console.log(userstr.split("-")[1]);
       this.userName=this.walletaccountservice.decrypt(userstr.split("-")[1]);
       this.loginflag=true;
       this.role=this.walletaccountservice.decrypt(userstr.split("-") [2]);
      
     }
    
}
ngOnInit(): void {
  this.storageService.watchStorage().subscribe(data=>{
    console.log(data);
    if(data == "set"){
      console.log("I am true");
      let userstr = localStorage.getItem("tokenId");
      console.log(userstr.split("-") [2]);
      this.userName=this.walletaccountservice.decrypt(userstr.split("-")[1]);
      this.role=this.walletaccountservice.decrypt(userstr.split("-")[2]);    
      
   this.loginflag=true; 
  }
    else{
     this.loginflag=false;}
  });
 }

 logout(){
   this.walletaccountservice.doLogout().subscribe(data=>{
     console.log(data);
     this.storageService.removeItem("tokenId");
     console.log("you have logged out");
    this.loginflag=false;
   }
     
     );
 }

 
}

