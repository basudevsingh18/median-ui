import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorsInterface } from '../interfaces/authors-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorFormAPIService {

  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
  }
}

  public createAuthor(author: AuthorsInterface) {
    return this.http.post<AuthorsInterface>(`${this.baseurl}/authors`, author);
  }

  public updateAuthor(author: AuthorsInterface) {
    return this.http.put<AuthorsInterface>(`${this.baseurl}/authors/${author.id}`, author);
  }

  public deleteAuthor(author: AuthorsInterface) {
    return this.http.delete<AuthorsInterface>(`${this.baseurl}/authors/${author.id}`);
  }

}
