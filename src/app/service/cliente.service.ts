import { Injectable } from '@angular/core';
import { NovoCliente } from '../interfaces/request/NovoCliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank";

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: NovoCliente): Observable<any> {
    return this.http.post(this.api+"/save-customer", cliente)
  }


}
