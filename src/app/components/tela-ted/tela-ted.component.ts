import { Component } from '@angular/core';
import { InfoTedService } from '../../service/info-ted-service';
import { InfoTed } from '../../interfaces/request/InfoTed';
import { ErroResponse } from '../../interfaces/response/ErroResponse';
import { TedResponse } from '../../interfaces/request/TedResponse';

@Component({
  selector: 'app-tela-ted',
  templateUrl: './tela-ted.component.html',
  styleUrl: './tela-ted.component.css',
})
export class TelaTedComponent {
  constructor(private infoTedService: InfoTedService) {}

  tedResponse: TedResponse | null = null;

  erroResponse!: ErroResponse;

  infoTed: InfoTed = {
    accountNumber: '',
    agency: '',
    value: 0,
  };

  transferir() {
    if (
      this.infoTed.agency.length == 4 &&
      this.infoTed.accountNumber.length == 8 &&
      this.infoTed.value.valueOf() > 0
    ) {
      let token: string = localStorage.getItem('jwtToken') || '';
      this.infoTedService.transferir(this.infoTed, token).subscribe(
        (data: TedResponse) => {
          this.tedResponse = data;
          alert(
            'Transferência efetuada com sucesso!\n' +
              'Conta destino: ' +
              this.tedResponse.customerNameDestiny +
              '\n' +
              'Conta origem: ' +
              this.tedResponse.customerNameOrigin +
              '\n' +
              'Data da transação: ' +
              this.tedResponse.dateTransaction +
              '\n' +
              'Valor da transação: ' +
              this.tedResponse.value
          );
          location.reload();
        },
        (error: ErroResponse) => {
          alert(error.message);
        }
      );
    } else {
    }
  }

  mascaraValor(event: any) {
    let input = event.target as HTMLInputElement;
    let numero = input.value.replace(/\D/g, '');

    if (numero === '') {
      input.value = '0,00';
    }

    if (numero.length === 1) {
      // Se o usuário digitou apenas um número, adicionamos zeros à esquerda e uma vírgula
      input.value = '0,0' + numero;
    } else if (numero.length === 2) {
      // Se o usuário digitou dois números, adicionamos zeros à esquerda e uma vírgula
      input.value = '0,' + numero;
    } else {
      // Se o número tem mais de dois dígitos, removemos um zero à esquerda a cada nova digitação
      let parteInteira = numero
        .substring(0, numero.length - 2)
        .replace(/^0+/, ''); // Remove zeros à esquerda
      let parteDecimal = numero.substring(numero.length - 2);
      input.value = parteInteira + ',' + parteDecimal;
    }
    this.infoTed.value = this.formatarValor(numero);
  }

  formatarValor(valor: string): number {
    let valorSemFormato = valor.replace(/\D/g, '').replace(/,/g, '');
    let valorNumerico = parseFloat(valorSemFormato);
    let valorParaRequisicao = valorNumerico.toFixed(2);

    return parseFloat(valorParaRequisicao) / 100;
  }

  mascaraNumeroConta(event: any) {
    let input = event.target as HTMLInputElement;
    let numero = input.value.replace(/\D/g, '');
    let formattedNumber = '';
  
    if (numero.length <= 8) {
      formattedNumber = numero;
    } else {
      formattedNumber = numero.substring(0, 8);
    }
  
    input.value = formattedNumber;
    this.infoTed.accountNumber = numero;
  }

  mascaraAgencia(event: any) {
    let input = event.target as HTMLInputElement;
    let numero = input.value.replace(/\D/g, '');
    let formattedNumber = '';

    if (numero.length <= 4) {
      formattedNumber = numero;
    } else {
      formattedNumber = numero.substring(0, 4);
    }

    input.value = formattedNumber;
    this.infoTed.agency = numero;
  }

}
