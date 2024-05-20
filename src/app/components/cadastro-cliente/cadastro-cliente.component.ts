import { Component } from '@angular/core';
import { NovoCliente } from '../../interfaces/request/NovoCliente';
import { ClienteService } from '../../service/cliente.service';
import { catchError } from 'rxjs';
import { ErroResponse } from '../../interfaces/response/ErroResponse';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  constructor(private clienteService: ClienteService) { }

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
    if (this.camposNulos.length == 0) {
      this.clienteService.cadastrarCliente(this.novoCliente)
        .subscribe(
          () => {
            alert('Cadastrado com sucesso!');
          },
          (error: ErroResponse[]) => {
            alert(error.map(error => error.message).join('\n'));
            this.erros = error
          }
        )
    }else{
      alert(this.camposNulos.join('\n'));
    }
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

}
