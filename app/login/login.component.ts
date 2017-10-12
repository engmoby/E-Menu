 
import { Component, OnInit } from "@angular/core";
import { AuthenticationService  } from "../common/authentication/authentication.service";

 
@Component({
  selector: 'my-app',  
  templateUrl:'../app/login/login.html',
}) 
export class LoginComponent  {
  
    constructor (private authenticationService: AuthenticationService) {}
    email:string="";
    password:string="";
    
    
    onSubmit(data) {
        
        // .subscribe(
        //     posts => this.menuList = posts );
        // this.submitted = true;
        // this.data = JSON.stringify(data, null, 2);
        this.authenticationService.authenticate(this.email,this.password);
        console.log(data);
        console.log(this.email,this.password);
    }
   
  } 