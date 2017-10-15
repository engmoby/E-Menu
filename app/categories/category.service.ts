import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http'; 
import {Observable}     from 'rxjs/Observable';
import {CategoryModel}           from './category.model';
import {ItemModel}           from '../items/item.model';
@Injectable()
export class categoryService {
  
    private apiUrl = 'http://ecatalogbackend.azurewebsites.net/api/'; 
  constructor ( private http: Http  ) { }
   
   
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getData(menuId:number):Observable<CategoryModel[]> {
    return this.http.get(this.apiUrl+'Menus/'+menuId+'/Categories', {headers: this.getHeaders()})
        .map(this.extractArrayData)
        .catch(this.handleError);
}

  getItemsList(catId:number):Observable<ItemModel[]> {
    return this.http.get(this.apiUrl+'Categories/'+catId+'/Items', {headers: this.getHeaders()})
        .map(this.extractArrayData)
        .catch(this.handleError);
}

private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization','bearer cRht-PALtmCT2OxVUU3tOoiYVwCW1xGIHw0NxGOhJY2BUWuaIIAcnhPbrRqRVwbCXnwXAYckguiyShLVAcS2iBq19vrz-jKaIXrp8FKZ-KRkZTfLqHXXVjuW4T1OS1qyiAfIDz8X69QIWhfENZvYOB8BuV84rdRvSTPzODqlki-yS2QaaK3llhALr0cBOKGiwzjtburabtybCfD7FB8renNq7b5oqHuXcfyjh9Ji0y5vhFYHBc6VsSl5sxl_Z445DwXwMU0Ld0nLyquOoUzZa65xRmtX5OBR0KpdNS6YgcNRkg0SifEUdw1iniKHDy5BZEirXwdWCmb6nLCxc6Ve7itErwMg_PosD6gF0QEYopY');
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