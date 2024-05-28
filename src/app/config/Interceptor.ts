import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, switchMap, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { LoadingService } from '../service/loading.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, 
    private loadService: LoadingService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepting request...", req.url);
    this.loadService.show();
    const publicUrls = [
      'https://fourcamp.up.railway.app/api-fourbank/get-token',
      'https://fourcamp.up.railway.app/api-fourbank/save-customer'
    ];

    if (publicUrls.includes(req.url)) {
      console.log("Public URL, skipping authorization header...");
      return next.handle(req).pipe(
        timeout(6000),
        finalize(() => this.loadService.hide())
      );
    }

    const token = this.loginService.getToken();
    if (!token) {
      console.log("Token not found, redirecting to login...");
      this.loginService.logout();
      this.router.navigate(['/login']);
      return throwError('Token não encontrado');
    }

    console.log("Adding authorization header...");
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    localStorage.setItem('expirado', 'false');

    return next.handle(authReq).pipe(
      timeout(6000),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          console.log("Unauthorized, redirecting to login...");
          this.loginService.logout();
          if(localStorage.getItem('expirado') == 'false'){
            localStorage.setItem('expirado', 'true');
            alert("Sessão Expirou !");
          }
          
          this.router.navigate(['/login']);
        }
        if (error.status === 503 || error.name === 'TimeoutError') {
          console.log("Timeout or 503 error, redirecting to login...");
          this.loginService.logout();
          this.router.navigate(['/login']);
        }
        return throwError(error);
        return throwError(error);
      }), 
      finalize(() => this.loadService.hide())
    );
  }
}
