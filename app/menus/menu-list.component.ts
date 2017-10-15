 
import { Component, OnInit } from "@angular/core";
import { MenuService  } from "./menu.service";
import {MenuModel}           from './menu.model';   
 
@Component({
  selector: 'my-app',  
  templateUrl:'../app/menus/menu-list-component.html',
}) 
export class MenuListComponent implements OnInit {
  
    constructor (private menuService: MenuService) {}
  
    errorMessage: string;
    menuList:MenuModel[];
  
    ngOnInit() {  
      this.getMenuList(); }
    
    getMenuList() {
      this.menuService.getData()
          .subscribe(
              posts => this.menuList = posts,
              error => this.errorMessage = <any>error);
  }
   
  } 