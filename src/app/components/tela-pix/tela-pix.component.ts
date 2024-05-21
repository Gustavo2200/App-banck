import { Component } from '@angular/core';
import { PixKey } from '../../interfaces/response/PixKeyResponse';
import { PixService } from '../../service/pix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-pix',
  templateUrl: './tela-pix.component.html',
  styleUrl: './tela-pix.component.css'
})
export class TelaPixComponent {

  constructor() { }

  usuario: any
  conta: any
  chavesPix: PixKey[] = []
  constructor(private pixService: PixService, private router: Router) {}

  ngOnInit(): void {

    this.pixService.listarChavesPix().subscribe((chavesPix) => {
      this.chavesPix = chavesPix
    })
  }
  voltar(){
    this.router.navigate(['/tela-principal'])
  }

  let token: string = localStorage.getItem('jwtToken') || ''

  console.log(token)
  }

}
