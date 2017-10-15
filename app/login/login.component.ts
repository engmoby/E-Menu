import {Router} from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { AuthenticationService  } from "../common/authentication/authentication.service";
import { AuthorizationService } from '../common/authorization/authorization.service'

 
@Component({
  selector: 'my-app',  
  templateUrl:'../app/login/login.html',
}) 
export class LoginComponent  implements OnInit {
  
    constructor (private authenticationService: AuthenticationService,private router:Router,private AuthorizationService:AuthorizationService) {}
    email:string="";
    password:string="";
    
    ngOnInit() {  
      // this.router= Router;
      if(this.AuthorizationService.isLoggedIn())
        this.router.navigateByUrl('/home');
     }
    onSubmit(data) {
        
        // .subscribe(
        //     posts => this.menuList = posts );
        // this.submitted = true;
        // this.data = JSON.stringify(data, null, 2);
       var k = this.authenticationService.authenticate(this.email,this.password).subscribe(data => {
        this.router.navigateByUrl('/home');
      },
      error => {
        // Processing for failures
      });
       console.log(k) 
       console.log(data);

        console.log(this.email,this.password);
    }
   
  } 