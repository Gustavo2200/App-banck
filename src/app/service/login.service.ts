import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Token } from '../interfaces/response/Token';
import { LoginDados } from '../interfaces/request/LoginDados';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = 'https://fourcamp.up.railway.app/api-fourbank/get-token';

  constructor(private http: HttpClient) {}

  logar(loginDados: LoginDados): Observable<any> {
    return this.http.post<Token>(this.urlLogin, loginDados).pipe(
      tap(response => {
        localStorage.setItem('jwtToken', response.token);
      })
    );
  }

  validarToken(): Observable<boolean> {
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      localStorage.setItem('expirado', 'false');
      return this.http.get<any>('https://fourcamp.up.railway.app/api-fourbank/check-token', { headers, observe: 'response' })
        .pipe(
          map(response => response.status === 200),
          catchError(() => of(false))
        );
    }
    return of(false);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}