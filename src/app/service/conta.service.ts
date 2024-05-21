import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from '../interfaces/request/Conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly api =  "https://fourcamp.up.railway.app/api-fourbank";

  constructor(private http: HttpClient) { }

  accountInfo() : Observable<Conta>{
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Conta>(this.api+"/account-info", { headers: headers });
  }
  getAccountInfo() {
    try{
    this.accountInfo().subscribe((data) => {  
      const conta ={
        customerName : data.customerName,
        accountNumber : data.accountNumber,
        accountAgency: data.accountAgency
      };
      const jsonData = JSON.stringify(conta);
      localStorage.setItem('accountInfo', jsonData);
    });
    }catch (error) {
      console.error('Erro ao obter informações da conta:', error);
    }
  }
}
