import { Component } from '@angular/core';
import { Transferencia } from '../../../interfaces/request/Transferencia';
import { TransferenciaService } from '../../../service/transferencia.service';

@Component({
  selector: 'app-tela-extrato',
  templateUrl: './tela-extrato.component.html',
  styleUrl: './tela-extrato.component.css'
})
export class TelaExtratoComponent {
  historico : Transferencia[]=[];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.listar().subscribe((listaDeTransferencias) => {
      this.historico = listaDeTransferencias;
    });
  }
  formatarMoeda(valor:number): string{
    return valor.toFixed(2).replace('.',',');
  }
}
