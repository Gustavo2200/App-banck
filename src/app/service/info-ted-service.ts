import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoTed } from '../interfaces/request/InfoTed';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoTedService {

  private readonly api = "https://fourcamp.up.railway.app/api-fourbank/transaction/ted"

  constructor(private http: HttpClient) { }

  transferir(infoTed: InfoTed):Observable<InfoTed> {
    return this.http.post<InfoTed>(this.api, infoTed)
  }           
}
