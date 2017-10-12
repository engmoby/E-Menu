import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent }         from '../../common/app-component/app.Component';  
import { MenuListComponent }      from '../../menus/menu-list.component';
import { CategoryListComponent }      from '../../categories/category.component';
import { ItemListComponent } from '../../items/item.component';
import { MenuDetailsComponent } from '../../menus/menusDetails/menu-details-component';

import { MenuService }      from '../../menus/menu.service'; 
import { categoryService }      from '../../categories/category.service'; 
import { ItemService }      from '../../items/item.service'; 
import { routing } from '../../common/route/app.routes';
   
// Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent, 
    MenuListComponent,
    CategoryListComponent,
    ItemListComponent,
    MenuDetailsComponent,  
  ],
  providers: [
    MenuService,
    categoryService,
    ItemService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}