 
import { Component, OnInit } from "@angular/core";
import { categoryService  } from "./category.service";
import {CategoryModel}           from './category.model';   
import {ItemModel}           from '../items/item.model';   
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',  
  templateUrl:'../app/categories/category.html',
}) 
export class CategoryListComponent implements OnInit {
  
    constructor (private categoryService: categoryService, private route: ActivatedRoute) {}
    
    private sub:any;    
    errorMessage: string;
    categorylist:CategoryModel[]; 
    itemslist:ItemModel[];
    ngOnInit() {  
      this.getMenuList();   }
    
    getMenuList() {
        this.sub = this.route.params.subscribe(params => {
            
                    let id = params['id'];
            
                   // Retrieve Pet with Id route param
                   this.categoryService.getData(id)
                   .subscribe(
                       posts => this.categorylist = posts,
                       error => this.errorMessage = <any>error);
      
                });  
     
  }
  getItemList(catId) {
     this.sub = this.route.params.subscribe(params => {
         
    this.categoryService.getItemsList(catId)
        .subscribe(
            posts => this.itemslist = posts,
            error => this.errorMessage = <any>error);
          });  
console.log(this.itemslist);
}
  } 