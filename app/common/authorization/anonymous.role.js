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
var authorization_service_1 = require("../authorization/authorization.service");
var router_1 = require("@angular/router");
var CanActivateTeam = (function () {
    function CanActivateTeam(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
    }
    CanActivateTeam.prototype.canActivate = function () {
        if (this.authorizationService.isLoggedIn())
            return true;
        else
            this.router.navigateByUrl('/login');
    };
    return CanActivateTeam;
}());
CanActivateTeam = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [authorization_service_1.AuthorizationService, router_1.Router])
], CanActivateTeam);
exports.CanActivateTeam = CanActivateTeam;
//# sourceMappingURL=anonymous.role.js.map