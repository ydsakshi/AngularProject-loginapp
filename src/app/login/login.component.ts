import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

// @Component->in angular it is called compt decorator[for compt declarn] unlike java
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
      providers : [LoginService]
})
// only by exporting this class can be used  by others[all services,comps should be exported]
export class LoginComponent implements OnInit {
  login:Login=new Login(); //to hold the data
  loginService: LoginService; //by default it(service) is a singleton by ang
  constructor(loginService : LoginService) {
    this.loginService=loginService; //told the reference for the service object provided by injection
   }
  ngOnInit() {
    this.login.userName="ROOT";
    this.login.password="ROOT";
  }
  onSubmit(){
    this.loginService.addData(this.login);
    
    console.log(JSON.stringify(this.login));
    this.login=new Login();
  }
}
