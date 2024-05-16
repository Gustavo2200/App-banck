import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-destinatario-pix',
  templateUrl: './modal-destinatario-pix.component.html',
  styleUrl: './modal-destinatario-pix.component.css'
})
export class ModalDestinatarioPixComponent {

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

}
