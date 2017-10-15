"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var authentication_service_1 = require("../common/authentication/authentication.service");
var authorization_service_1 = require("../common/authorization/authorization.service");
var LoginComponent = (function () {
    function LoginComponent(authenticationService, router, AuthorizationService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.AuthorizationService = AuthorizationService;
        this.email = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.router= Router;
        if (this.AuthorizationService.isLoggedIn())
            this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.onSubmit = function (data) {
        var _this = this;
        // .subscribe(
        //     posts => this.menuList = posts );
        // this.submitted = true;
        // this.data = JSON.stringify(data, null, 2);
        var k = this.authenticationService.authenticate(this.email, this.password).subscribe(function (data) {
            _this.router.navigateByUrl('/home');
        }, function (error) {
            // Processing for failures
        });
        console.log(k);
        console.log(data);
        console.log(this.email, this.password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../app/login/login.html',
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router, authorization_service_1.AuthorizationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map