import { Component } from '@angular/core';
import { PixService } from '../../service/pix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cadastrar-chave-pix',
  templateUrl: './modal-cadastrar-chave-pix.component.html',
  styleUrl: './modal-cadastrar-chave-pix.component.css'
})
export class ModalCadastrarChavePixComponent {

  chavePix: string = '';

  constructor(private pixService: PixService, private router: Router) {}

  cadastrarChavePix(): void{
    this.pixService.registarChavePix(this.chavePix).subscribe(()=>{
      location.reload();
    });
    
  }

}
