import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http'; 
import {Observable}     from 'rxjs/Observable';
import { AuthorizationService }           from '../authorization/authorization.service';
import { APPConstant } from '../shared/app.constant'

@Injectable()
export class AuthenticationService {
  
    //  private hotelUrl = 'http://ecatalogbackend.azurewebsites.net/api/'; 
  constructor ( private http: Http, private authorizationService:AuthorizationService  ) { }
  

  authenticate(email:string,password:string):any{
    var credentials = {
        'username': email,
        'password': password,
        'grant_type':'password'
      }
       return this.requestToken(credentials, 'password');
   }
   
   requestToken(credentials:any, grantType:string):any {
    //    credentials.append('grant_type', grantType)
    var creds = "username=" + credentials.username + "&password=" + credentials.password +"&grant_type=" + credentials.grant_type;
    var result = this.http.post(APPConstant.API_URL + "token",creds, {headers: this.getHeaders()})
    .map(response => this.authorizationService.setAuthInfo(response.json()))
    // .map(this.extractData(Response,this.authorizationService))
    .catch(this.handleError).subscribe()
      
     return result;
      
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