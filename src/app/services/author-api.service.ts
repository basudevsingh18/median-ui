import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorAPIService {

  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
  }

  public getAuthors() {
    return this.http.get(`${this.baseurl}/authors`);
  }

}
