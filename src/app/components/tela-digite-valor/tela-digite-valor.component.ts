import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PixService } from '../../service/pix.service';
import { TransferenciaPix } from '../../interfaces/request/TransferenciaPix';
import { ContaDestinoResponse } from '../../interfaces/response/ContaDestinoResponse';
import { ErroResponse } from '../../interfaces/response/ErroResponse';
import { TransferenciaPixResponse } from '../../interfaces/response/TransferenciaPixResponse';

@Component({
  selector: 'app-tela-digite-valor',
  templateUrl: './tela-digite-valor.component.html',
  styleUrl: './tela-digite-valor.component.css'
})
export class TelaDigiteValorComponent {

  constructor(private router: Router, private pixService: PixService, private route: ActivatedRoute) { }

  valorTransferencia: number = 0;
  token: string = localStorage.getItem('token') || '';
  pixKey: string = '';
 contaDestinoResponse: ContaDestinoResponse | ErroResponse | null = null;


  ngOnInit(): void {
    // Tira o fundo escuro que vem do modal anterior
    const backGroundEscuro = document.querySelector('.modal-backdrop');
    if (backGroundEscuro != null) {
      backGroundEscuro.remove();
    }
    this.route.params.subscribe((params) => {
      this.pixKey = params['key'];
    });
    this.pixService.buscarContaPorChavePix(this.pixKey, this.token).subscribe((response) => {
      this.contaDestinoResponse = response;
    });

  }
  confirmarTransferencia(){
   const transferencia = this.gerarTransferencia();
    this.pixService.transferenciaPix(transferencia,this.token).subscribe((response: TransferenciaPixResponse | ErroResponse)=>{

      if ('status' in response){
        alert(response.message);
      } else{
        alert("Transferecia concluída com sucesso");
      }
    })
  }

  gerarTransferencia(): TransferenciaPix{
    const transferencia: TransferenciaPix = {
      pixKey: this.pixKey,
      value: this.valorTransferencia
    }
    return transferencia;
  }

  cancelarTransferencia(){
    this.router.navigate(['/pix'])
  }
  formatarValor(event: any) {
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
        let parteInteira = numero.substring(0, numero.length - 2).replace(/^0+/, ''); // Remove zeros à esquerda
        let parteDecimal = numero.substring(numero.length - 2);
        input.value = parteInteira + ',' + parteDecimal;
    }
}
}
