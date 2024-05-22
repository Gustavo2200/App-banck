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
  formatarMoeda(): string{
    return this.historico[0].value.toFixed(2).replace('.',',');
  }
}
