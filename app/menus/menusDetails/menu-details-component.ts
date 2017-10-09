 
import { Component, OnInit } from "@angular/core";
import { MenuService  } from "../menu.service";
import {Menu}           from '../Menu';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  template: ` 
     
   <div *ngIf='menuObj'>
   
   
       {{ menuObj.menuName }} 
       {{ menuObj.menuId }} 
       
      
</div> 
  `,
}) 
export class MenuDetailsComponent implements OnInit {
  
    constructor (private menuService: MenuService, private route: ActivatedRoute) {}
    private sub:any;
    errorMessage: string;
    menuObj:Menu;
  
    ngOnInit() {   
  // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        
                let id = params['id'];
        
               // Retrieve Pet with Id route param
                this.menuService.getMenuDetails(id).subscribe(dog => this.menuObj = dog); 
  
            });  
  
    }
    
  
   
  } 