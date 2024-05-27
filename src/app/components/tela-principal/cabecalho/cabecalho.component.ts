import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../../service/conta.service';
import { Conta } from '../../../interfaces/request/Conta';
import { ComponenteSelecionadoService } from '../../../service/componente-selecionado.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  
  conta : Conta = {
    customerName: "" ,
    accountNumber: "",
    accountAgency: "",
    value: 0.0
  };

  constructor(private contaService: ContaService, private componenteService: ComponenteSelecionadoService){}
ngOnInit(): void {
  this.contaService.accountInfo().subscribe((getConta)=>{
    this.conta = getConta;
  })
}
selecionarComponente(componente: string) {
  this.componenteService.mudarComponente(componente);
}
}
