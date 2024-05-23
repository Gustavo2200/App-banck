import { Component } from '@angular/core';
import { Transferencia } from '../../../interfaces/request/Transferencia';
import { TransferenciaService } from '../../../service/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
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
