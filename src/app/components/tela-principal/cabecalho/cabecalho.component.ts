import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../../service/conta.service';
import { Conta } from '../../../interfaces/request/Conta';

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

  constructor(private contaService: ContaService){}
ngOnInit(): void {
  this.contaService.accountInfo().subscribe((getConta)=>{
    this.conta = getConta;
  })
}
}
