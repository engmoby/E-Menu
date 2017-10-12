import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MenuListComponent } from '../../menus/menu-list.component';
import { MenuDetailsComponent } from '../../menus/menusDetails/menu-details-component';
import { CategoryListComponent } from '../../categories/category.component';
import { LoginComponent } from '../../login/login.component';

// import { dogRoutes }    from './dogs/dog.routes';


// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, 
   { path: 'login', component: LoginComponent },
   { path: 'menu', component: MenuListComponent },
   { path: 'menu/:id', component: MenuDetailsComponent }, 
   { path: 'menu/:id/category', component: CategoryListComponent },
   // ...dogRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);