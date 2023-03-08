import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleAPIService {

  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
  }
  public getArticles() {
    return this.http.get(`${this.baseurl}/articles`);
  }
}
