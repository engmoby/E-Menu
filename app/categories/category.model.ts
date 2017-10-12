
import {ItemModel}           from '../items/item.model'; 

export class CategoryModel {
    constructor(
      public categoryId:number,
      public categoryName:string,
    public imageURL:string,
    public itemList:Array<ItemModel>,
  ) { }
  }
  