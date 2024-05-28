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

   ngOnInit(){
    if(this.loginService.getToken() != null){
      this.router.navigate(['/tela-principal']);
    }
   }
  
  login(): void {
    this.loginService.logar(this.loginDados).pipe(
      catchError(error => {
        
        if(this.loginDados.login == '' || this.loginDados.password == '') {
          this.errorMessage = 'Por favor, preencha todos os campos.';
          console.error(this.errorMessage);// Imprime o erro no console
          return of(null); // Continua o fluxo retornando um Observable nulo
        }

        this.errorMessage = this.getErrorMessage(error.status);
        console.error(this.errorMessage);// Imprime o erro no console
        return of(null); // Continua o fluxo retornando um Observable nulo
      })
    ).subscribe(response => {
      if (response) {
        this.router.navigate(['/tela-principal']);
        this.errorMessage = '';
      }
    });
  }

  private getErrorMessage(statusCode: number): string {
    switch (statusCode) {
      case 400:
        return 'Usuário ou senha inválidos. Por favor, verifique os dados enviados.';
      case 401:
        return 'Credenciais incorretas.';
      case 403:
        return 'Você não tem permissão para acessar este recurso.';
      case 404:
        return 'Recurso não encontrado.';
      case 500:
        return 'Ocorreu um problema no servidor. Por favor, tente novamente mais tarde.';
      default:
        return 'Ocorreu um erro desconhecido. Por favor, tente novamente.';
    }
  }


  formatarCPF(event: any) {
    let input = event.target as HTMLInputElement;
    if(input.value.length === 11 ){
      let cpf = input.value.replace(/\D/g, '');
 
      if (cpf.length > 3) {
        cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
      }
      if (cpf.length > 7) {
        cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
      }
      if (cpf.length > 11) {
        cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
      }
      if (cpf.length > 14) {
        cpf = cpf.substring(0, 14);
      }
   
      input.value = cpf;
      this.loginDados.login = cpf
    }
  }
}