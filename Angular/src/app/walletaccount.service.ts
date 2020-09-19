import { Injectable } from '@angular/core';
import  {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletaccountService {
  private baseUrl = "http://localhost:8082/wallet/addwallet"
  private baseUrl1 = "http://localhost:8082/wallet/addbank"
  
  
  constructor(private http: HttpClient) {

  }
  decrypt(token:string){
    let str="";
    for(let i=0;i<token.length;++i)
    {
      str=str+String.fromCharCode(token.charCodeAt(i)-3)
    }
   console.log(str);
   return str;
  }

  encrypt(token: string){
    let str="";
    for(let i=0;i<token.length;++i)
    {
      str=str+String.fromCharCode(token.charCodeAt(i)+3)
    }
   console.log(str);
   return str;
  }

public doLogout()
{
  let utoken =localStorage.getItem("token");
  if(utoken == null) utoken="";
  const httpHeaders = new HttpHeaders({"tokenid": utoken});
  return this.http.get("http://localhost:8084/wallet/logout", {headers:httpHeaders,responseType:'text'});
}
 public doLogin(userId: string, pwd: string):Observable<any> {
    let postdata = new FormData();
    postdata.append('userid', userId);
    postdata.append('password', this.encrypt(pwd) );
    return this.http.post("http://localhost:8084/wallet/login",postdata,{responseType:'text'})
    
  }

  saveWallet(wallet: Object): Observable<Object> {
    console.log('Inside save wallet')
    return this.http.post(`${this.baseUrl}/`, wallet);
  }
  
  saveBank(bank: Object): Observable<Object> {
    console.log('Inside save bank')
    return this.http.post(`${this.baseUrl1}/`,bank);
  }

  
}

