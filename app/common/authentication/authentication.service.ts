import { Injectable,Injector } from '@angular/core';
import { Http, Response,Headers } from '@angular/http'; 
import {Observable}     from 'rxjs/Observable';
import { AuthorizationService }           from '../authorization/authorization.service';
import { APPConstant } from '../shared/app.constant'

@Injectable()
export class AuthenticationService {
  
  private http: Http;
  
  constructor (injector:Injector , private authorizationService:AuthorizationService  ) { 
    setTimeout(() => this.http = injector.get(Http));
  }
  

  authenticate(email:string,password:string):any{
      var creds = "username=" + email + "&password=" + password +"&grant_type=password";
       return this.requestToken(creds);
   }
   
   requestToken(creds:any):any {
    var result = this.http.post( "token",creds, {headers: this.getHeaders()})
    .map(response => this.authorizationService.setAuthInfo(response.json()))
    // .map(this.extractData(Response,this.authorizationService))
    .catch(this.handleError).subscribe()
      
     return result;
      
  }
  isAuthenticated() {
    return !!this.authorizationService.getAuthInfo();
  }
  getToken() {
    var authInfo = this.authorizationService.getAuthInfo();
    var expirydate = new Date(authInfo['.expires']); 
    if (new Date() >= expirydate) {
      return this.refreshToken(authInfo['refresh_token'])
    }
    return authInfo;
    // var defer = $q.defer();
    // defer.resolve(authInfo);
    // return defer.promise;
  }
  refreshToken(refreshToken) {
    var creds = "refresh_token=" + refreshToken + "&grant_type=refresh_token";
    return this.requestToken(creds);
  }
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  
  private getHeaders(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return headers;
  }
  private extractData(res:Response, authorizationService:AuthorizationService) {
        let body = res.json();
        authorizationService.setAuthInfo(body)
        return body || [];
    }

} 