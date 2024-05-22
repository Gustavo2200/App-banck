import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { PixKey } from '../interfaces/response/PixKeyResponse';
import { ContaDestinoResponse } from '../interfaces/response/ContaDestinoResponse';
import { TransferenciaPix } from '../interfaces/request/TransferenciaPix';
import { TransferenciaPixResponse } from '../interfaces/response/TransferenciaPixResponse';
import { ErroResponse } from '../interfaces/response/ErroResponse';
import { DadosDestino } from '../interfaces/response/DadosDestino';

@Injectable({
  providedIn: 'root'
})
export class PixService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank";
  private token:string = localStorage.getItem('jwtToken') || ''

  constructor(private http: HttpClient) { }

  listarChavesPix() :Observable<PixKey[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<PixKey[]>(this.api + "/my-pix-keys", { headers });
  }
  buscarContaPorChavePix(chavePix: string) :Observable<ContaDestinoResponse | ErroResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<ContaDestinoResponse>(this.api + "/find-account/pix?key=" + chavePix, { headers }).pipe(
      catchError((error) =>{
        const erroResponse: ErroResponse = {
          status: error.status,
          message: error.error.message,
          path: error.url,
          timestamp: new Date().toISOString()
        }
        return of(erroResponse);
      })
    )
  }
  registarChavePix(tipoChave: string): Observable<void>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post<void>(this.api + "/save-pix-key?type_key=" + tipoChave, {}, { headers });
  }

  transferenciaPix(transferenciaPix: TransferenciaPix): Observable<TransferenciaPixResponse | ErroResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post<TransferenciaPixResponse>(this.api + "/transaction/pix", transferenciaPix, { headers }).pipe(
      catchError((error) =>{
        const erroResponse: ErroResponse = {
          status: error.status,
          message: error.error.message,
          path: error.url,
          timestamp: new Date().toISOString()
        }
        return of(erroResponse);
      })
    );
}

  buscarDadosContaDestino(idConta: number): Observable<DadosDestino | ErroResponse>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<DadosDestino>(this.api + "/find-account?id=" + idConta, { headers }).pipe(
      catchError((error) =>{
        const erroResponse: ErroResponse = {
          status: error.status,
          message: error.error.message,
          path: error.url,
          timestamp: new Date().toISOString()
        }
        return of(erroResponse);
      })
    )
  }
}
