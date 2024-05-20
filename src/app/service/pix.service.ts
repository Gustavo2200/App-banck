import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { PixKey } from '../interfaces/response/PixKeyResponse';
import { ContaDestinoResponse } from '../interfaces/response/ContaDestinoResponse';
import { TransferenciaPix } from '../interfaces/request/TransferenciaPix';
import { TransferenciaPixResponse } from '../interfaces/response/TransferenciaPixResponse';
import { ErroResponse } from '../interfaces/response/ErroResponse';

@Injectable({
  providedIn: 'root'
})
export class PixService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank";
  constructor(private http: HttpClient) { }

  listarChavesPix(token: string) :Observable<PixKey[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<PixKey[]>(this.api + "/my-pix-keys", { headers });
  }
  buscarContaPorChavePix(chavePix: string, token: string) :Observable<ContaDestinoResponse | ErroResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
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
  registarChavePix(tipoChave: string, token: string): void{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.post<void>(this.api + "/save-pix-key?type_key=" + tipoChave, {}, { headers });
  }

  transferenciaPix(transferenciaPix: TransferenciaPix, token: string): Observable<TransferenciaPixResponse | ErroResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
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
}
