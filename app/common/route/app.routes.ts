import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MenuListComponent } from '../../menus/menu-list.component';
import { MenuDetailsComponent } from '../../menus/menusDetails/menu-details-component';

import { CategoryListComponent } from '../../categories/category.component';
import { LoginComponent } from '../../login/login.component';

import { ItemListComponent } from '../../items/item.component';
import { HomeComponent } from '../../home/home.component';
// import { dogRoutes }    from './dogs/dog.routes';
import { CanActivateTeam } from '../authorization/anonymous.role'


// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, 
   { path: 'login', component: LoginComponent},
   { path: 'home', component: HomeComponent,canActivate: [CanActivateTeam] },
   { path: 'menu', component: MenuListComponent,canActivate: [CanActivateTeam] },
   { path: 'menu/:id', component: MenuDetailsComponent,canActivate: [CanActivateTeam] }, 
   { path: 'menu/:id/category', component: CategoryListComponent,canActivate: [CanActivateTeam] },
   { path: 'menu/:id/item', component: ItemListComponent,canActivate: [CanActivateTeam] },
   // ...dogRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);