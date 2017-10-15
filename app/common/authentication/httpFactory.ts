import {XHRBackend, Http, RequestOptions,ConnectionBackend} from "@angular/http";
import {InterceptedHttp} from "./InterceptedHttp";
import { AuthenticationService }  from '../../common/authentication/authentication.service'
import { ReflectiveInjector,Injector }       from '@angular/core';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions,authenticationService:AuthenticationService): Http {
    
    // var k =injector.get(AuthenticationService)
    return new InterceptedHttp(xhrBackend, requestOptions,authenticationService);
}