import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MenuListComponent } from '../../menus/menu-list.component';
import { MenuDetailsComponent } from '../../menus/menusDetails/menu-details-component';

import { CategoryListComponent } from '../../categories/category.component';
import { LoginComponent } from '../../login/login.component';

import { ItemListComponent } from '../../items/item.component';
import { HomeComponent } from '../../home/home.component';
// import { dogRoutes }    from './dogs/dog.routes';


// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, 
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   { path: 'menu', component: MenuListComponent },
   { path: 'menu/:id', component: MenuDetailsComponent }, 
   { path: 'menu/:id/category', component: CategoryListComponent },
   { path: 'menu/:id/item', component: ItemListComponent },
   // ...dogRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);