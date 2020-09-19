import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferFundService } from '../transferfund.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  msg:string;
    constructor(private router:Router, private storageservice:StorageService,private transferfundService:TransferFundService) { }
  
    ngOnInit(): void {
    }
    doLogin(){
      this.transferfundService.doLogin(this.uname , this.pwd).subscribe(data=>{
        this.storageservice.setItem("tokenId", data);
        this.msg=undefined;
        this.router.navigateByUrl("/");
      },error=>{console.log(error),this.msg=JSON.parse(error.error).message});
    }
  
  }
  
