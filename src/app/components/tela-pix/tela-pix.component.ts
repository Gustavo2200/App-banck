import { Component } from '@angular/core';
import { PixKey } from '../../interfaces/response/PixKeyResponse';
import { PixService } from '../../service/pix.service';
import { Router } from '@angular/router';
import { ContaService } from '../../service/conta.service';
import { Conta } from '../../interfaces/request/Conta';

@Component({
  selector: 'app-tela-pix',
  templateUrl: './tela-pix.component.html',
  styleUrl: './tela-pix.component.css'
})
export class TelaPixComponent {

  conta!: Conta;
  chavesPix: PixKey[] = []
  constructor(private contaService: ContaService, private pixService: PixService, private router: Router) {}

  ngOnInit(): void {

    this.pixService.listarChavesPix().subscribe((chavesPix) => {
      this.chavesPix = chavesPix
    
      this.contaService.accountInfo().subscribe((conta) => {
        this.conta = conta;
      })
    })
  }
  voltar(){
    this.router.navigate(['/tela-principal'])
  

  let token: string = localStorage.getItem('jwtToken') || ''

  console.log(token)
  }

}