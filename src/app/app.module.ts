import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { CabecalhoComponent } from './components/tela-principal/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/tela-principal/rodape/rodape.component';
import { ExtratoComponent } from './components/tela-principal/extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    CabecalhoComponent,
    RodapeComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
