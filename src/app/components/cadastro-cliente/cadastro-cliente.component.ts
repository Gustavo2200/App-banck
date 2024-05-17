import { Component } from '@angular/core';
import { NovoCliente } from '../../interfaces/request/NovoCliente';
import { ClienteService } from '../../service/cliente.service';
import { catchError } from 'rxjs';

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

  cadastrar() {
    this.clienteService.cadastrarCliente(this.novoCliente)
      .pipe(
        catchError(error => {
          if(error.status != 201) {
            alert(error.message);
          }
          return error;
        })   
      );
      alert("Cadastrado com sucesso!");
      this.novoCliente = {
        name: '',
        email: '',
        phone: '',
        password: '',
        cpf: '',
        dateBirth: new Date()
      }
    }
}
