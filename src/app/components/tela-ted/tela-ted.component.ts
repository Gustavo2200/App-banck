import { Component } from '@angular/core';
import { InfoTed } from '../../interfaces/request/InfoTed';
import { InfoTedService } from '../../service/info-ted-service';


@Component({
  selector: 'app-tela-ted',
  templateUrl: './tela-ted.component.html',
  styleUrl: './tela-ted.component.css'
})

export class TelaTedComponent {

  constructor(private infoTedService: InfoTedService) { }

  infoTed!: InfoTed

  transferir() {
    if(this.infoTed.agencia.toString().length == 4 && this.infoTed.conta.toString().length == 8 && this.infoTed.valor.valueOf() > 0) {
    if(this.infoTedService.transferir(this.infoTed).subscribe()) {
        alert("Transferência efetuada com sucesso!")
      }
    }
  }
}
