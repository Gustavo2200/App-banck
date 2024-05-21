import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-pix',
  templateUrl: './tela-pix.component.html',
  styleUrl: './tela-pix.component.css'
})
export class TelaPixComponent {

  constructor() { }

  usuario: any
  conta: any
  chavesPix: any[] = []

  ngOnInit(): void {
  let token: string = localStorage.getItem('jwtToken') || ''

  console.log(token)
  }


}
