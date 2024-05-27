import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../../../interfaces/request/Transferencia';
import { TransferenciaService } from '../../../service/transferencia.service';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  historico: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferenciaService.listar().subscribe((listaDeTransferencias) => {
      this.historico = listaDeTransferencias.map(transferencia => ({
        ...transferencia,
        dateTransaction: this.convertToClientTimezone(transferencia.dateTransaction.toString()),
      }));
    });
  }

  formatarMoeda(valor: number): string {
    return valor.toFixed(2).replace('.', ',');
  }

  formatarData(data: string): Date {
    return new Date(data);
  }

  convertToClientTimezone(dateString: string): Date {
    const date = parseISO(dateString);
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate;
  }
}
