import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../service/login.service';

@Component({
  selector: 'app-modal-sair-conta',
  templateUrl: './modal-sair-conta.component.html',
  styleUrl: './modal-sair-conta.component.css'
})
export class ModalSairContaComponent {
  constructor(private router: Router,private loginService: LoginService){}
sair(){
    this.loginService.logout();
    this.router.navigate(['/login']);
    setTimeout(() => {
      location.reload();
    }, 100);
}
}
