import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData :Login[]=[];
  constructor() { }
  addData(login: Login):string{
    this.loginData.push(login);
    this.loginData.forEach(element => {
      console.log(element.userName);
    });
    console.log(this.loginData);
    return "SUCCESS";
  }
}
