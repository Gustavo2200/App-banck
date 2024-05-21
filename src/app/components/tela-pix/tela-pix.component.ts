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
  conta: any
  chavesPix: PixKey[] = []
  token: string = ''
  constructor(private pixService: PixService, private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem('token', this.token);
    this.pixService.listarChavesPix(this.token).subscribe((chavesPix) => {
      this.chavesPix = chavesPix
    })
  }
  voltar(){
    this.router.navigate(['/tela-principal'])
  }
}
