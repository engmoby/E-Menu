 
import { Component, OnInit } from "@angular/core";
import { MenuService  } from "./menu.service";
import {Menu}           from './Menu';   
 
@Component({
  selector: 'my-app',  
  template: ` 
     
   <div>
   <ul class="items">
       <li *ngFor="let h of menuList"> 
       <a [routerLink]="['/menu', h.Id]">{{ h.DisplayValue }}</a>
       
       </li>
   </ul>
</div> 
  `,
}) 
export class MenuListComponent implements OnInit {
  
    constructor (private menuService: MenuService) {}
  
    errorMessage: string;
    menuList:Menu[];
  
    ngOnInit() {  
      this.getMenuList(); }
    
    getMenuList() {
      this.menuService.getData()
          .subscribe(
              posts => this.menuList = posts,
              error => this.errorMessage = <any>error);
  }
   
  } 