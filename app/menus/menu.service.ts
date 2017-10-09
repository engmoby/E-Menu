import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http'; 
import {Observable}     from 'rxjs/Observable';
import {Menu}           from './Menu';
@Injectable()
export class MenuService {
  
    private hotelUrl = 'http://ecatalogbackend.azurewebsites.net/api/'; 
  constructor ( private http: Http  ) { }
   
   
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  getData():Observable<Menu[]> {
    return this.http.get(this.hotelUrl+'Menus?langId=en', {headers: this.getHeaders()})
        .map(this.extractArrayData)
        .catch(this.handleError);
}

getMenuDetails(id:number):Observable<Menu> {
    return this.http.get(this.hotelUrl+'Menus/'+id+'?langId=en', {headers: this.getHeaders()})
        .map(this.extractData)
        .catch(this.handleError);
}

private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization','bearer XyIn6dsUyZ0DyqcGLS0fQBKUxK611tKwWXGlYnLsuIu8xnqUkMfJ-HcGNuGu8W5mmK8qBAYWrPqTyxucWGGZSgOXF8j2zEQaiXoXLr-AMlIJUn8w70-pZ_pS4W-v45EkkZCKMZUQWclWTVKtA_rw_2kIpZwucMdwNxRGZOPfQipgumBpBZXGMoALWDHQ15_VGay4Nffzffm69e2e-Ou6yUDT2p9B1MVs4FtfL6afv0r9jYJ_hrhqU5l9XQhwR6HluLsBPqhLytRin96M0hKdvcki3X3yjaov62_8Mx9phWtp0tfV8w7hq9wdrD_qCS8DFw73FrnILaZoDedouctBu3kxKM2rmt6mPn7PLb6bj2Y');
    return headers;
  }

private extractData(res:Response) {
    let body = res.json();
    return body || [];
} 
private extractArrayData(res:Response) {
    let body = res.json().results;
    return body || [];
} 

} 