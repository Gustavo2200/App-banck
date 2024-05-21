import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoTed } from '../interfaces/request/InfoTed';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { ErroResponse } from '../interfaces/response/ErroResponse';
import { TedResponse } from '../interfaces/request/TedResponse';

@Injectable({
  providedIn: 'root'
})
export class InfoTedService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank/transaction/ted"

  constructor(private http: HttpClient) { }

  transferir(infoTed: InfoTed, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<TedResponse>(this.api, infoTed, { headers })
    .pipe(
      map(
        response => {
          return response
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<ErroResponse> {
    let apiError: ErroResponse = { status: error.status, message: error.error?.message, path: '' , timestamp: new Date().toISOString() }; return throwError(apiError);
  }
/*
  private handleResponse(response:  TedResponse): Observable<TedResponse> {
    let apiResponse: TedResponse = { customerNameDestiny: response.customerNameDestiny, customerNameOrigin: response.customerNameOrigin, idTransaction: response.idTransaction, typeTransaction: response.typeTransaction , dateTransaction: response.dateTransaction , value: response.value}; return of(apiResponse);
  }*/
}
