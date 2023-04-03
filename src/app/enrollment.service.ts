import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http: HttpClient) { }

  url='http://localhost:3000/enroll'
  enroll(formData:User){
    return this._http.post<any>(this.url, formData)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(err: HttpErrorResponse){
    return throwError(err)
  }
}
