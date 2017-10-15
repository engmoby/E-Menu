
import {ItemSizeModel}           from '../items/models/item.size.model'; 
import {ItemSideModel}           from '../items/models/item.side.model'; 

export class ItemModel {
    constructor(
      public itemID:number,
      public itemName:string,
      public itemDescription:string,
      public imageURL:string,
      // public sizes:Array<ItemSizeModel>,
      // public sideItems:Array<ItemSideModel>
    ) 
    { }
  }
  