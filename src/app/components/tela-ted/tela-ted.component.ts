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

  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3VyYmFuayIsInN1YiI6IjgwMTAzOTE5MDU4IiwiY3VzdG9tZXJfaWQiOiIxNyIsImNwZiI6IjgwMTAzOTE5MDU4IiwicGFzc3dvcmQiOiIkMmEkMTAkS3pCclBoODltWGl3VGJCc3F5LzlZT0pXY1pZLlFxOGdvT0ZrWmZNZHVlTEYwR2JPU3FDR3kiLCJleHAiOjE3MTYyMzgwMzN9.SId03etr9_R2zNpbZ9Uju3MSLeURFPtRI21GVMGWnHg";
  
  
  infoTed: InfoTed = {
    accountNumber: "",
    agency: "",
    value: 0
  }

  transferir() {
    if(this.infoTed.agency.length == 4 && this.infoTed.accountNumber.length == 8 && this.infoTed.value.valueOf() > 0) {
      
    if(this.infoTedService.transferir(this.infoTed, this.token).subscribe()) {
        alert("Transferência efetuada com sucesso!")
      }else{
        alert("Erro ao efetuar transferência!")
      }
    }else if(this.infoTed.agency.length != 4 || this.infoTed.accountNumber.length != 8 || this.infoTed.value.valueOf() <= 0) {
      alert("Verifique os dados e tente novamente!")
    }
  }
}
