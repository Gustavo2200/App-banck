import { Component } from '@angular/core';
import { ComponenteSelecionadoService } from '../../../service/componente-selecionado.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

  constructor(private componenteService: ComponenteSelecionadoService){}

  
  selecionarComponente(componente: string) {
    this.componenteService.mudarComponente(componente);
  }
}
