import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http'; 
import {Observable}     from 'rxjs/Observable';
import {category}           from './category';
@Injectable()
export class categoryService {
  
    private hotelUrl = 'http://ecatalogbackend.azurewebsites.net/api/'; 
  constructor ( private http: Http  ) { }
   
   
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  getData(menuId:number):Observable<category[]> {
    return this.http.get(this.hotelUrl+'Menus/'+menuId+'/Categories', {headers: this.getHeaders()})
        .map(this.extractArrayData)
        .catch(this.handleError);
}

getMenuDetails(id:number):Observable<category> {
    return this.http.get(this.hotelUrl+'Categories/'+id, {headers: this.getHeaders()})
        .map(this.extractData)
        .catch(this.handleError);
}

private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization','bearer b6QVUalyNyZU6-zOqpce4QzqSrrbt-TnA106SDrTjggc-3UQ9taCkRhjGXwhfncUKIJMdgmpOd7Mky8IyMJQpCXlj6-Y6E26zm70incQ4EpATFqWg9s2isvgFA-1Sktk5EgqhlNGp6IhbRKRICfW73MbLPkrNQMcOo9fko4M29jW8C5WnTNFK-tEivay-cfzhZcatyrXGv8u7eM_aYlvyfbHhODovATkwlPHMcEOdDylnrTiJl9nPv8-an3q_1q23jrhrvrioS26ElWkFmSSPjheH8rpK0m-5ShJH-xThS2QFhVVC-BEwDliYkK5wDr1kdDVXkvhj7iWRcLwqJV-Hq3aERJ_UcAyftEUpc7UiVE');
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