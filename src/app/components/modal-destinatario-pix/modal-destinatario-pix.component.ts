import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PixService } from '../../service/pix.service';
import { ContaDestinoResponse } from '../../interfaces/response/ContaDestinoResponse';
import { ErroResponse } from '../../interfaces/response/ErroResponse';

@Component({
  selector: 'app-modal-destinatario-pix',
  templateUrl: './modal-destinatario-pix.component.html',
  styleUrl: './modal-destinatario-pix.component.css'
})
export class ModalDestinatarioPixComponent {

  constructor(private pixService: PixService, private router: Router) {}

   chavePix: string = '';
  
   conta: ContaDestinoResponse | null = null;
   erroResponse: ErroResponse | null = null;

   enviarTransferencia() {
    console.log(this.chavePix);
    this.pixService.buscarContaPorChavePix(this.chavePix).subscribe((response: ContaDestinoResponse | ErroResponse) => {
      
      if ('status' in response) { // Erro
        this.erroResponse = response;
        console.log(this.erroResponse);
        alert("Conta destino não encontrada, verifique a chave Pix e tente novamente");
      } else { // Sucesso
        this.conta = response;
        console.log(this.conta);
        this.router.navigate(['/confirmar-transferencia'], { queryParams: { key: this.chavePix } });
      }
    });
  }

  formatarCelular(event: any) {
    let input = event.target as HTMLInputElement;
    let numero = input.value.replace(/\D/g, '');

    if (numero.length > 2) {
      numero = '(' + numero.substring(0, 2) + ') ' + numero.substring(2);
    }
    if (numero.length > 9) {
      numero = numero.substring(0, 10) + '-' + numero.substring(10);
    }
    if (numero.length > 15) {
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

}
