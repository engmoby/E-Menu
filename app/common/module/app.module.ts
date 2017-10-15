import { NgModule,Injector }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
// import { HTTP_INTERCEPTORS } from'@angular/common/http'
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
import { APPConstant } from '../shared/app.constant'
import { AuthorizationService } from '../authorization/authorization.service'
import { AuthenticationService } from '../authentication/authentication.service'
import { LoginComponent } from '../../login/login.component'


import {httpFactory} from '../authentication/httpFactory';

// Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    routing,
    LocalStorageModule.withConfig({
        prefix: 'my-app',
        storageType: 'localStorage'
    }),
    // APPConstant,
    // AuthorizationService,
    // AuthenticationService
  ],
  declarations: [
    AppComponent, 
    MenuListComponent,
    CategoryListComponent,
    MenuDetailsComponent,
    LoginComponent,
    ItemListComponent,
  ],
  providers: [
    MenuService,
    categoryService,
    APPConstant,
    AuthorizationService,
    AuthenticationService,
    ItemService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions,AuthenticationService]
  }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}