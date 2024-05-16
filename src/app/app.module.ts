import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';

import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { CabecalhoComponent } from './components/tela-principal/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/tela-principal/rodape/rodape.component';
import { ExtratoComponent } from './components/tela-principal/extrato/extrato.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabecalhoComponent,
    RodapeComponent,
    TelaPrincipalComponent,
    CabecalhoComponent,
    RodapeComponent,
    ExtratoComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
