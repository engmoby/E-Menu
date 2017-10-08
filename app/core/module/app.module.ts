import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent }         from '../app-component/app.component';  
import { MenuComponent }      from '../../menu/menu.component';
import { MenuDetailsComponent } from '../../menu/menuDetails/menu-details.component';
import { MenuService }      from '../../menu/menu.service'; 
import { routing } from '../app-router/app.routes';

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
    MenuComponent,
    MenuDetailsComponent
  ],
  providers: [
    MenuService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}