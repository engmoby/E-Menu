import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent }         from './app.component';
import { CatListComponent }   from './cats/cat-list.component';
// import { CatDetailsComponent }  from './cats/cat-details.component';
import { DogListComponent }      from './dogs/dog-list.component';
import { MenuListComponent }      from './menus/menu-list.component';
import { MenuDetailsComponent } from './menus/menusDetails/menu-details-component';
import { MenuService }      from './menus/menu.service';
// import { DogDetailsComponent }  from './dogs/dog-details.component';
// import { PetService }          from './pet.service';
// import { Pet }          from './pet';
import { routing } from './app.routes';

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
    CatListComponent,
    MenuListComponent,
    MenuDetailsComponent,
    // CatDetailsComponent,
    DogListComponent,
    // DogDetailsComponent
  ],
  providers: [
    MenuService
    // PetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}