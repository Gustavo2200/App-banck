import { Injectable } from '@angular/core';
import { NovoCliente } from '../interfaces/request/NovoCliente';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ErroResponse } from '../interfaces/response/ErroResponse';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank";

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: NovoCliente): Observable<any> {
    return this.http.post(this.api+"/save-customer", cliente)
      .pipe(
        catchError(this.handleError)
      );
  }

  gerarConta(token: String | null){
    console.log(token)
    const headers = {
      Authorization: `Bearer ${token}`
    }

    
    return this.http.post(this.api+"/save-account", {}, { headers });

  }

  private handleError(error: HttpErrorResponse): Observable<ErroResponse[]> {
    let errorMessage: ErroResponse[] = [];

    if (error.error instanceof Array) {
      errorMessage = error.error;
    } else {
      errorMessage = [{
        message: error.message,
        status: error.status,
        path: error.url || '',
        timestamp: new Date().toISOString()
      }];
    }

    return throwError(errorMessage);
  }
}
