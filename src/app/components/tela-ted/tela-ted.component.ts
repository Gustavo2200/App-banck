import { Component } from '@angular/core';
import { InfoTedService } from '../../service/info-ted-service';
import { InfoTed } from '../../interfaces/request/InfoTed';
import { ErroResponse } from '../../interfaces/response/ErroResponse';
import { TedResponse } from '../../interfaces/request/TedResponse';


@Component({
  selector: 'app-tela-ted',
  templateUrl: './tela-ted.component.html',
  styleUrl: './tela-ted.component.css'
})

export class TelaTedComponent {

  constructor(private infoTedService: InfoTedService) { }

  tedResponse: TedResponse | null = null
  
  erroResponse!: ErroResponse
  
  infoTed: InfoTed = {
    accountNumber: "",
    agency: "",
    value: 0
  }

  transferir() {

    if(this.infoTed.agency.length == 4 && this.infoTed.accountNumber.length == 8 && this.infoTed.value.valueOf() > 0) {
      let token: string = localStorage.getItem('jwtToken') || '';
      this.infoTedService.transferir(this.infoTed, token).subscribe(
      
      (data: TedResponse) => {
        this.tedResponse = data
      }, (error: ErroResponse) => {
        alert(error.message)
      }
    )



    } else {
    }
  }
}
