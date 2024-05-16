import { Component } from '@angular/core';
import { NovoCliente } from '../../interfaces/request/NovoCliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  
  novoCliente: NovoCliente = {
    name: '',
    email: '',
    phone: '',
    password: '',
    cpf: '',
    dateBirth: new Date()
  }

  cadastrar() {
    alert(this.novoCliente.name + '\nCadastrado com sucesso!');
  }
}
