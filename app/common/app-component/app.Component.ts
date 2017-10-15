import { Component } from '@angular/core';
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
  selector: 'my-app',
  // styleUrls: ['../app/common/app-component/app.Component.css'],
  template: `
  <div class="head">
  <div class="head-nav-grids">
    <div class="navbar-top">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
           <div class="navbar-brand logo ">
            <h1><a [routerLink]="['/home']">E-Menu</a></h1>
          </div>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul class="nav navbar-nav link-effect-4">
        <li class="active"><a [routerLink]="['/home']">Home</a> </li>
          <li><a  [routerLink]="['/menu']">Menu </a> </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div> 
    <div class="clearfix"></div>	
  </div>
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