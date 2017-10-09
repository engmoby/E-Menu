 
import { Component, OnInit } from "@angular/core";
import { categoryService  } from "./category.service";
import {category}           from './category';   
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',  
  templateUrl:'../app/categories/category.html',
}) 
export class CategoryListComponent implements OnInit {
  
    constructor (private categoryService: categoryService, private route: ActivatedRoute) {}
    
    private sub:any;    
    errorMessage: string;
    categorylist:category[];
  
    ngOnInit() {  
      this.getMenuList(); }
    
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
   
  } 