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
var core_1 = require("@angular/core");
var authentication_service_1 = require("../common/authentication/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.email = "";
        this.password = "";
    }
    LoginComponent.prototype.onSubmit = function (data) {
        // .subscribe(
        //     posts => this.menuList = posts );
        // this.submitted = true;
        // this.data = JSON.stringify(data, null, 2);
        this.authenticationService.authenticate(this.email, this.password);
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
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map