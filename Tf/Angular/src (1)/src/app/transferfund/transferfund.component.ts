import { Component, OnInit } from '@angular/core';
import { TransferFundService } from '../transferfund.service';
import { TransferfundForm } from '../transferfundform';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transferfund',
  templateUrl: './transferfund.component.html',
  styleUrls: ['./transferfund.component.css']
})
export class TransferFundComponent implements OnInit {
  transferfundform:TransferfundForm = new TransferfundForm();

  msg:string;
  errorMsg:string;
  tform:any;
  form:NgForm;

  constructor(private service:TransferFundService, private router:Router,private route:ActivatedRoute)
   { }

  ngOnInit(): void {
  }

  transferFund(){
    this.service.doTxn(this.transferfundform).subscribe(data=>{console.log(data);
      this.msg=data.message;this.errorMsg=undefined},
       error=>{ console.log(error);this.errorMsg=error.error.message; this.msg=undefined}
     );
    }
 

}
