import { Component } from '@angular/core';
import { InfoTedService } from '../../service/info-ted-service';
import { InfoTed } from '../../interfaces/request/InfoTed';


@Component({
  selector: 'app-tela-ted',
  templateUrl: './tela-ted.component.html',
  styleUrl: './tela-ted.component.css'
})

export class TelaTedComponent {

  constructor(private infoTedService: InfoTedService) { }

  token: string = "";
  
  
  infoTed: InfoTed = {
    accountNumber: "",
    agency: "",
    value: 0
  }

  transferir() {
    if(this.infoTed.agency.length == 4 && this.infoTed.accountNumber.length == 8 && this.infoTed.value.valueOf() > 0) {
      
    if(this.infoTedService.transferir(this.infoTed, this.token).subscribe(
      (response ) => {
        alert(response)
      }, (error) => alert(error)
    )) {
        alert("Transferência efetuada com sucesso!")
      }else{
        alert("Erro ao efetuar transferência!")
      }
    }else if(this.infoTed.agency.length != 4 || this.infoTed.accountNumber.length != 8 || this.infoTed.value.valueOf() <= 0) {
      alert("Verifique os dados e tente novamente!")
    }
  }
}
