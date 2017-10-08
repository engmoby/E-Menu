import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import {Observable}     from 'rxjs/Observable';
import {Menu}           from './Menu';
@Injectable()
export class MenuService {
  
    private hotelUrl = 'http://gmgapi.azurewebsites.net/SystemParameters/Hotels/'; 
  constructor ( private http: Http  ) { }
   
   

  getData():Observable<Menu[]> {
      return this.http.get(this.hotelUrl+'GetAll?langId=en')
        .map(this.extractData)
        .catch(this.handleError);
}

getMenuDetails(id:number):Observable<Menu> {
    return this.http.get(this.hotelUrl+'GetHotelDetails/'+id+'?langId=en')
        .map(this.extractData)
        .catch(this.handleError);
}

private extractData(res:Response) {
    let body = res.json();
    return body || [];
} 
private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
} 