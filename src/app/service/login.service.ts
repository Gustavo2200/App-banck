import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Token } from '../interfaces/response/Token';
import { LoginDados } from '../interfaces/request/LoginDados';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = 'https://fourcamp.up.railway.app/api-fourbank/get-token';

  constructor(private http: HttpClient) { }

  logar(loginDados: LoginDados): Observable<any> {

    console.log(loginDados);

    return this.http.post<Token>(this.urlLogin, loginDados).pipe(
      tap(response => {
        this.logout();
        localStorage.setItem('jwtToken', response.token);
      })
    );
  }


  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}