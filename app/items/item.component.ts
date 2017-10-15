 
import { Component, OnInit } from "@angular/core";
import { ItemService  } from "./item.service";
import {ItemModel}           from './item.model';   
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',  
  templateUrl:'../app/items/item.html',
}) 
export class ItemListComponent implements OnInit {
  
    constructor (private ItemService: ItemService, private route: ActivatedRoute) {}
    
    private sub:any;    
    errorMessage: string;
    Itemlist:ItemModel[];
  
    ngOnInit() {  
      this.getItemList(); }
    
    getItemList() {
        this.sub = this.route.params.subscribe(params => {
            
                    let id = params['id'];
            
                   // Retrieve Pet with Id route param
                   this.ItemService.getData(id)
                   .subscribe(
                       posts => this.Itemlist = posts,
                       error => this.errorMessage = <any>error);
      
                });  
     
  }
   
  } 