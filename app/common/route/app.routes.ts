import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MenuListComponent } from '../../menus/menu-list.component';
import { MenuDetailsComponent } from '../../menus/menusDetails/menu-details-component';

import { CategoryListComponent } from '../../categories/category.component';
import { LoginComponent } from '../../login/login.component';

import { ItemListComponent } from '../../items/item.component';
<<<<<<< HEAD
import { HomeComponent } from '../../home/home.component';
=======

>>>>>>> d2871b252e2b4ada891eb43d64cb3fba2594863e
// import { dogRoutes }    from './dogs/dog.routes';


// Route Configuration
export const routes: Routes = [
    {
        path: '',
<<<<<<< HEAD
        redirectTo: '/home',
        pathMatch: 'full'
      }, 
   { path: 'home', component: HomeComponent },
=======
        redirectTo: '/login',
        pathMatch: 'full'
      }, 
   { path: 'login', component: LoginComponent },
>>>>>>> d2871b252e2b4ada891eb43d64cb3fba2594863e
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