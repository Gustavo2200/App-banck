import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponenteSelecionadoService {

  private componenteAtualSubject = new BehaviorSubject<string>('extrato');
  componenteAtual$ = this.componenteAtualSubject.asObservable();

  mudarComponente(componente: string) {
    this.componenteAtualSubject.next(componente);
  }
}
