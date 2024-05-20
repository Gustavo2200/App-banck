import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoTed } from '../interfaces/request/InfoTed';
import { Observable, catchError, of } from 'rxjs';
import { ErroResponse } from '../interfaces/response/ErroResponse';

@Injectable({
  providedIn: 'root'
})
export class InfoTedService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank/transaction/ted"

  constructor(private http: HttpClient) { }

  transferir(infoTed: InfoTed, token: string):Observable<InfoTed | ErroResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<InfoTed>(this.api, infoTed, {headers}).pipe( catchError((error) =>{
      const erroResponse: ErroResponse = {
        status: error.status,
        message: error.message,
        path: error.url,
        timestamp: new Date().toISOString()
      }
      return of(erroResponse);
    }))
  }           
}
