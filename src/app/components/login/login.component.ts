import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { LoginDados } from '../../interfaces/request/LoginDados';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDados : LoginDados = {
    login: '',
    password: ''
  }
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

   
  
  login(): void {
    this.loginService.logar(this.loginDados).pipe(
      catchError(error => {
        this.errorMessage = this.getErrorMessage(error.status);
        console.error(this.errorMessage);
        return of(null); // Continua o fluxo retornando um Observable nulo
      })
    ).subscribe(response => {
      if (response) {
        this.router.navigate(['/pix']);
        this.errorMessage = '';
      }
    });
  }

  private getErrorMessage(statusCode: number): string {
    switch (statusCode) {
      case 400:
        return 'Solicitação inválida. Por favor, verifique os dados enviados.';
      case 401:
        return 'Não autorizado. Verifique suas credenciais.';
      case 403:
        return 'Proibido. Você não tem permissão para acessar este recurso.';
      case 404:
        return 'Recurso não encontrado. Por favor, tente novamente mais tarde.';
      case 500:
        return 'Erro interno do servidor. Por favor, tente novamente mais tarde.';
      default:
        return 'Ocorreu um erro desconhecido. Por favor, tente novamente.';
    }
  }
}