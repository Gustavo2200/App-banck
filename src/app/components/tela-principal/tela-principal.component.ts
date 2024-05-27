import { Component } from '@angular/core';
import { Conta } from '../../interfaces/request/Conta';
import { ContaService } from '../../service/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent {
  conta : Conta = {
    customerName: "" ,
    accountNumber: "",
    accountAgency: "",
    value: 0.0
  };

  mostrarSaldo: boolean = true;
  componenteAtual: string = 'extrato'

  constructor(private contaService: ContaService, private router: Router){}
ngOnInit(): void {
  if(localStorage.getItem('jwtToken') == null){
    this.router.navigate(['/login']);
  }
  this.contaService.accountInfo().subscribe((getConta)=>{
    this.conta = getConta;
  })
}
getCurrentDate(): string {
  return new Date().toLocaleDateString();
}
formatarMoeda(): string{
  return this.conta.value.toFixed(2).replace('.',',');
}
  mostrarComponente(componente: string) {
    this.componenteAtual = componente;
}
alternarVisibilidadeSaldo() {
  this.mostrarSaldo = !this.mostrarSaldo;
}

obterSaldoFormatado(): string {
  if (this.mostrarSaldo) {
    return "R$ "+ this.formatarMoeda();
  } else {
    return '••••'
  }
}

}
