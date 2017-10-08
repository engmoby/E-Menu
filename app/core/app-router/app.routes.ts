import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MenuComponent } from '../../menu/menu.component';
import { MenuDetailsComponent } from '../../menu/menuDetails/menu-details.component'; 
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
   { path: 'menu', component: MenuComponent },
   { path: 'menu/:id', component: MenuDetailsComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);