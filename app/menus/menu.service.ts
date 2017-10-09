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
    headers.append('Authorization','bearer x3n1vSQeK4e8SqlCGc_K8dFhVmUdO9CMhWXO-SEqpHzSzzUg6QvjKHq5-WEu81htAl7hYGTH3WjEfIApJUeBP9bNnNTx9W2J6mrb6-6P9102qhkugsYU3y4cCtreu6B8ZTgweKV4xjabQ_Wi3eG7QsYs2OiZHUGOQQoAp-MeUEktldJotiZ0w-XBQy6-omkE7uXA9k3QPKyUIhpJ_1s0wZ6soMrRVMAL6HxEELoOh-XfYV6r0ofIeNi_xuL6jHjtvY93aONAFxEy8AoSQh0r9xLS3i2jeN1h9Z7IQgZwgGi6DS1Bc28O0BgniFG-pdOYiy3RxXBv56wL_QNUaNzx3E-OGyi7mPhwqTG1D75Wh7Q');
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