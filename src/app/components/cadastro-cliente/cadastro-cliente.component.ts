

import { Component } from '@angular/core';
import { NovoCliente } from '../../interfaces/request/NovoCliente';
import { ClienteService } from '../../service/cliente.service';
import { LoginService } from '../../service/login.service';
import { LoginDados } from '../../interfaces/request/LoginDados';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { ErroResponse } from '../../interfaces/response/ErroResponse';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  constructor(private clienteService: ClienteService, private loginService: LoginService, private router: Router) { }

  novoCliente: NovoCliente = {
    name: '',
    email: '',
    phone: '',
    password: '',
    cpf: '',
    dateBirth: new Date()
  }

  mensagensErroBackend: string[] = [];

  erros: any = {};

  cadastrar() {
    this.validarCampos();
    if (Object.keys(this.erros).length === 0) {
      this.clienteService.cadastrarCliente(this.novoCliente)
        .subscribe(
          () => {
            this.novaConta();
            alert('Conta criada com sucesso!');
            this.router.navigate(['/login']);
          },
          (error: HttpErrorResponse[]) => {
            if (Array.isArray(error)) {
              this.mensagensErroBackend = []; // Limpa as mensagens anteriores
              error.forEach((err: any) => {
                this.mensagensErroBackend.push(err.message);
              });
              this.mensagensErroBackend.forEach((err: String) => {
                if(err.includes('Cpf')) {
                  this.erros.cpf = 'Digite um CPF válido';
                }

                if(err.includes('CPF')) {
                  this.erros.cpf = 'Cpf já registrado';
                }

                if(err.includes('email')) {
                  this.erros.email = 'Digite um e-mail válido';
                }

                if(err.includes('Email')) {
                  this.erros.email = 'Email já registrado';
                }

                if(err.includes('Telefone')) {
                  this.erros.phone = 'Telefone já registrado';
                }
                if(err.includes('Senha')) {
                  this.erros.password = err;
                }

              })
            } else {
              this.mensagensErroBackend.push('Ocorreu um erro. Por favor, tente novamente mais tarde.');
            }
          }
        );
    }
  }

  novaConta() {
    const loginDados: LoginDados = {
      login: this.novoCliente.email,
      password: this.novoCliente.password
    };
    this.loginService.logar(loginDados)
      .pipe(
        switchMap(() => this.clienteService.gerarConta(localStorage.getItem('jwtToken'))),
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
    this.erros = {};
    if (!this.novoCliente.name) {
      this.erros.name = 'Por favor, digite seu nome completo';
    }

    if (!this.novoCliente.email) {
      this.erros.email = 'Digite um e-mail válido';
    }

    if (!this.novoCliente.phone) {
      this.erros.phone = 'Digite um telefone válido';
    }
    if(this.novoCliente.phone.length < 15) {
      this.erros.phone = 'Digite um telefone válido';
    }

    if (!this.novoCliente.password) {
      this.erros.password = 'Digite uma senha válida (*entre 6 e 20 caracteres)';
    }

    if (!this.novoCliente.cpf) {
      this.erros.cpf = 'Digite um CPF válido';
    }

    if (this.calcularIdade(this.novoCliente.dateBirth.toString()) < 18) {
      this.erros.dateBirth = 'Você deve ter mais de 18 anos';
    }
  }

  formatarCelular (event: any) {
    let input = event.target as HTMLInputElement;
    let numero = input.value.replace(/\D/g, '');
 
    if (numero.length > 2) {
      numero = '(' + numero.substring(0, 2) + ') ' + numero.substring(2);
    }
    if (numero.length > 9) {
      numero = numero.substring(0, 10) + '-' + numero.substring(10);
    }
    if (numero.length > 15) {
      numero = numero.substring(0, 15);
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

  calcularIdade(dataNascimento: string): number {
    const dataNasc = new Date(dataNascimento);
    const hoje = new Date();
    const diferencaEmMilissegundos = hoje.getTime() - dataNasc.getTime();
    const idadeEmAnos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
    return idadeEmAnos;
  }
}
