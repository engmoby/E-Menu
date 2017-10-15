import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service'
import {Router} from '@angular/router';


@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private authorizationService:AuthorizationService,private router:Router) {}
 
  canActivate(){
    if( this.authorizationService.isLoggedIn())
     return true;
     else
     this.router.navigateByUrl('/login');
  }
}