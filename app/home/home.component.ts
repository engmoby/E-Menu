 
import { Component, OnInit } from "@angular/core";
import { MenuService  } from "../menus/menu.service";
import {MenuModel}           from '../menus/menu.model';   
 
@Component({
  selector: 'my-app',  
  templateUrl:'../app/home/home.component.html',
}) 
export class HomeComponent implements OnInit {
  
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