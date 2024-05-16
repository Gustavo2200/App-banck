import { Injectable } from '@angular/core';
import { NovoCliente } from '../interfaces/request/NovoCliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank";

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: NovoCliente) {
    return this.http.post(this.api+"/", cliente);
  }


}
