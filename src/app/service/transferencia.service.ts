import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Transferencia[]>(this.api+"/transaction/history");
  }
}
