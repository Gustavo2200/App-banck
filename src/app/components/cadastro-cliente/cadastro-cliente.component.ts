import { Component } from '@angular/core';
import { NovoCliente } from '../../interfaces/request/NovoCliente';
import { ClienteService } from '../../service/cliente.service';
import { catchError, switchMap } from 'rxjs';
import { ErroResponse } from '../../interfaces/response/ErroResponse';
import { LoginService } from '../../service/login.service';
import { LoginDados } from '../../interfaces/request/LoginDados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  constructor(private clienteService: ClienteService, 
    private loginService: LoginService, private router: Router) { }

  novoCliente: NovoCliente = {
    name: '',
    email: '',
    phone: '',
    password: '',
    cpf: '',
    dateBirth: new Date()
  }

  erros: ErroResponse[] = [];

  camposNulos: String[] = [];

  cadastrar() {
    this.validarCampos();
    if (this.camposNulos.length === 0) {
      this.clienteService.cadastrarCliente(this.novoCliente)
        .subscribe(
          () => {
            this.novaConta();
            this.router.navigate(['/tela-principal']);
          },
          (error: ErroResponse[]) => {
            alert(error.map(error => error.message).join('\n'));
            this.erros = error;
          }
        );
    } else {
      alert(this.camposNulos.join('\n'));
    }
  }

  novaConta() {
    const loginDados: LoginDados = {
      login: this.novoCliente.email,
      password: this.novoCliente.password
    };
    this.loginService.logar(loginDados)
      .pipe(
        switchMap(() => this.clienteService.gerarConta(this.loginService.getToken())),
      )
      .subscribe(
        response => {
          console.log('Conta gerada com sucesso:', response);
        },
        error => {
          console.error('Erro ao gerar a conta:', error);
        }
      );
  }

  validarCampos() {
    this.camposNulos = [];
    if (this.novoCliente.name == '') {
      this.camposNulos.push('Nome obrigatório');
    }

    if (this.novoCliente.email == '') {
      this.camposNulos.push('Email obrigatório');
    }

    if (this.novoCliente.phone == '') {
      this.camposNulos.push('Telefone obrigatório');
    }

    if (this.novoCliente.password == '') {
      this.camposNulos.push('Senha obrigatório');
    }

    if (this.novoCliente.cpf == '') {
      this.camposNulos.push('CPF obrigatório');
    }

  }

  formatarCelular(event: any) {
    let input = event.target as HTMLInputElement;
    let numero = input.value.replace(/\D/g, '');
 
    if (numero.length > 2) {
      numero = '(' + numero.substring(0, 2) + ') ' + numero.substring(2);
    }
    if (numero.length > 8) {
      numero = numero.substring(0, 9) + '-' + numero.substring(9);
    }
    if (numero.length > 14) {
      numero = numero.substring(0, 14);
    }
 
    input.value = numero;
  }

  formatarCPF(event: any) {
    let input = event.target as HTMLInputElement;
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
  }

  calcularDataNascimento(event: any) {
    let input = event.target as HTMLInputElement;
    let data = input.value;

    if (data.length === 10) {
      let dia = data.substring(0, 2);
      let mes = data.substring(3, 5);
      let ano = data.substring(6, 10);
      let diaFormatado = Number.parseInt(dia);
      let mesFormatado = Number.parseInt(mes);
      let anoFormatado = Number.parseInt(ano);
      let dataFormatada = new Date(anoFormatado, mesFormatado - 1, diaFormatado);

      let hoje = new Date();
      let idade = hoje.getFullYear() - anoFormatado;

     if (hoje.getMonth() < mesFormatado - 1 || (hoje.getMonth() === mesFormatado - 1 && hoje.getDate() < diaFormatado)) {
      idade--;
    }
    if(idade < 18){
      alert("O cliente deve ter mais de 18 anos");
      input.value ="";
  }
  else{
    input.value = data;
  }
}
}
}
