import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../interfaces/request/Transferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private readonly api =  "https://fourcamp.up.railway.app/api-fourbank";

  constructor(private http: HttpClient) { }

  listar() : Observable<Transferencia[]>{
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Transferencia[]>(this.api+"/transaction/history", { headers: headers });
  }
}
