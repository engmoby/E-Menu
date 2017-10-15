import {Injectable,Injector} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {APPConstant } from "../shared/app.constant";
import { AuthenticationService }  from '../../common/authentication/authentication.service'

@Injectable()
export class InterceptedHttp extends Http {
    authService:AuthenticationService;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,
        authenticationService:AuthenticationService) {
        // authenticationService = authenticationService;
        super(backend, defaultOptions);
        this.authService = authenticationService;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private updateUrl(req: string) {
        return  APPConstant.API_URL + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        if(options.withCredentials){
            options.headers.append('Content-Type', 'application/json');
            options.headers.append('Authorization','bearer '+this.authService.getToken().access_token);
        }
        return options;
    }
}