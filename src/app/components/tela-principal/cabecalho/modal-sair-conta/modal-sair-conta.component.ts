import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sair-conta',
  templateUrl: './modal-sair-conta.component.html',
  styleUrl: './modal-sair-conta.component.css'
})
export class ModalSairContaComponent {
  constructor(private router: Router){}
sair(){
  this.router.navigate(["/login"]);
  location.reload();
}
}
