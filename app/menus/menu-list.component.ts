 
import { Component, OnInit } from "@angular/core";
import { MenuService  } from "./menu.service";
import {MenuModel}           from './menu.model';  
import { AuthenticationService }  from '../common/authentication/authentication.service'
 
@Component({
  selector: 'my-app',  
  templateUrl:'../app/menus/menu-list-component.html',
}) 
export class MenuListComponent implements OnInit {
  
    constructor (private menuService: MenuService, private authenticationService:AuthenticationService) {}
  
    errorMessage: string;
    menuList:MenuModel[];
  
    ngOnInit() {  
      this.getMenuList(); }
    
    getMenuList() {
      this.menuService.getData()
          .subscribe(
              posts => this.menuList = posts,
              error => this.errorMessage = <any>error);
              console.log(this.authenticationService.getToken())
              console.log(this.authenticationService.getToken().access_token)              
              console.log(this.menuList)
              
  }
   
  } 