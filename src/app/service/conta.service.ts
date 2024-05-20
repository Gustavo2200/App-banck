import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from '../interfaces/request/Conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly api =  "https://fourcamp.up.railway.app/api-fourbank";

  constructor(private http: HttpClient) { }

  listar() : Observable<Conta[]>{
    return this.http.get<Conta[]>(this.api+"/account-info");
  }
}
