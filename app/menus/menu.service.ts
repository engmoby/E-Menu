import { Injectable } from '@angular/core';
import { Http, Response,Headers ,RequestOptions} from '@angular/http'; 
import {Observable}     from 'rxjs/Observable';
import {MenuModel}           from './menu.model';
@Injectable()
export class MenuService {
  
  constructor ( private http: Http  ) { }
   
   
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  getData():Observable<MenuModel[]> {
    return this.http.get('/Menus',new RequestOptions({
        withCredentials:true
      }))
        .map(this.extractArrayData)
        .catch(this.handleError);
}

getMenuDetails(id:number):Observable<MenuModel> {
    return this.http.get('Menus/'+id , {headers: this.getHeaders()})
        .map(this.extractData)
        .catch(this.handleError);
}

private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization','bearer jTynYaxk-L_9vS-h22jRjYLgN_lLXWVgwaMtYN2duFcRrh-3eQ5jciD01RFBXWVix3Ny8ksnDJsrlXRhYNLY6kKj14QtefmE38UDlMtGuk_K3SgynoWzxzNBqsPNSBx1492ag9QNG4oKXehv7iLK_B9Os_coSy6gFCBxb4UEKEEE3l4ARd3d9dJ_-CC0x8ZkMkgVKNXk7rMuoGK3FeTaZsPHzlXtkgs36cPbBTIZfFa3E975Lgk3S7sSBFFTXbvk21StMFusZ241nBfnHICV89z_K2yL7H1UkHGMoJPp9gA9CgKl7-rufd0cutsNFil7vSRp2ma9cOlO8-gi57YXRCcbBQ0zOnNUk4IR_c5YeOQ');
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