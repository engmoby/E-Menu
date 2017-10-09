import { Component } from '@angular/core';
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title">E-Menu</span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/']">Home</a> 
            <a class="mdl-navigation__link" [routerLink]="['/menu']">Menu</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
      <h1 class="header-text">List Of Our Menus...</h1>       
      </main>
    </div>

    <!-- Router Outlet -->
    <router-outlet></router-outlet>
  `,
  // Not necessary as we have provided directives using
  // `RouterModule` to root module
  // Tell component to use router directives
  // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent {}