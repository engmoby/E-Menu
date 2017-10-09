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
var categoryService = (function () {
    function categoryService(http) {
        this.http = http;
        this.hotelUrl = 'http://ecatalogbackend.azurewebsites.net/api/';
    }
    categoryService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    categoryService.prototype.getData = function (menuId) {
        return this.http.get(this.hotelUrl + 'Menus/' + menuId + '/Categories', { headers: this.getHeaders() })
            .map(this.extractArrayData)
            .catch(this.handleError);
    };
    categoryService.prototype.getMenuDetails = function (id) {
        return this.http.get(this.hotelUrl + 'Categories/' + id, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    };
    categoryService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'bearer b6QVUalyNyZU6-zOqpce4QzqSrrbt-TnA106SDrTjggc-3UQ9taCkRhjGXwhfncUKIJMdgmpOd7Mky8IyMJQpCXlj6-Y6E26zm70incQ4EpATFqWg9s2isvgFA-1Sktk5EgqhlNGp6IhbRKRICfW73MbLPkrNQMcOo9fko4M29jW8C5WnTNFK-tEivay-cfzhZcatyrXGv8u7eM_aYlvyfbHhODovATkwlPHMcEOdDylnrTiJl9nPv8-an3q_1q23jrhrvrioS26ElWkFmSSPjheH8rpK0m-5ShJH-xThS2QFhVVC-BEwDliYkK5wDr1kdDVXkvhj7iWRcLwqJV-Hq3aERJ_UcAyftEUpc7UiVE');
        return headers;
    };
    categoryService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    categoryService.prototype.extractArrayData = function (res) {
        var body = res.json().results;
        return body || [];
    };
    return categoryService;
}());
categoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], categoryService);
exports.categoryService = categoryService;
//# sourceMappingURL=category.service.js.map