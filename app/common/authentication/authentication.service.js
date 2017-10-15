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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var authorization_service_1 = require("../authorization/authorization.service");
var AuthenticationService = (function () {
    function AuthenticationService(injector, authorizationService) {
        var _this = this;
        this.authorizationService = authorizationService;
        setTimeout(function () { return _this.http = injector.get(http_1.Http); });
    }
    AuthenticationService.prototype.authenticate = function (email, password) {
        var creds = "username=" + email + "&password=" + password + "&grant_type=password";
        return this.requestToken(creds);
    };
    AuthenticationService.prototype.requestToken = function (creds) {
        var _this = this;
        var result = this.http.post("token", creds, { headers: this.getHeaders() })
            .map(function (response) { return _this.authorizationService.setAuthInfo(response.json()); })
            .catch(this.handleError).subscribe();
        return result;
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!this.authorizationService.getAuthInfo();
    };
    AuthenticationService.prototype.getToken = function () {
        var authInfo = this.authorizationService.getAuthInfo();
        var expirydate = new Date(authInfo['.expires']);
        if (new Date() >= expirydate) {
            return this.refreshToken(authInfo['refresh_token']);
        }
        return authInfo;
        // var defer = $q.defer();
        // defer.resolve(authInfo);
        // return defer.promise;
    };
    AuthenticationService.prototype.refreshToken = function (refreshToken) {
        var creds = "refresh_token=" + refreshToken + "&grant_type=refresh_token";
        return this.requestToken(creds);
    };
    AuthenticationService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    AuthenticationService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    AuthenticationService.prototype.extractData = function (res, authorizationService) {
        var body = res.json();
        authorizationService.setAuthInfo(body);
        return body || [];
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Injector, authorization_service_1.AuthorizationService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map