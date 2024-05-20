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

  accountInfo() : Observable<Conta[]>{
    return this.http.get<Conta[]>(this.api+"/account-info");
  }
  getAccountInfo() {
    this.accountInfo().subscribe(
      (data: Conta[]) => {
        const conta ={
          customerName : data[0].nome,
          accountNumber : data[0].numeroConta,
          accountAgency: data[0].numeroAgencia
        };
        const jsonData = JSON.stringify(conta);
        localStorage.setItem('accountInfo', jsonData);
      },
      (error) => {
        console.error('Erro ao obter informações da conta:', error);
      }
    );
  }
}
