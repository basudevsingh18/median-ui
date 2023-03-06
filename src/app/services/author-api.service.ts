import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AuthorsInterface } from '../interfaces/authors-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthorAPIService {

  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  // Http Headers
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }}

  getAuthors(): Observable<AuthorsInterface> {
        return this.http
                   .get<AuthorsInterface>(this.baseurl + '/authors')
                   .pipe(retry(1), catchError(this.errorHandl));
    }

    errorHandl(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
    
}
