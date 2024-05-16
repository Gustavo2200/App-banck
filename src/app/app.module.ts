import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaTedComponent } from './components/tela-ted/tela-ted.component';
import { TelaPixComponent } from './components/tela-pix/tela-pix.component';
import { ModalCadastrarChavePixComponent } from './components/modal-cadastrar-chave-pix/modal-cadastrar-chave-pix.component';
import { ModalDestinatarioPixComponent } from './components/modal-destinatario-pix/modal-destinatario-pix.component';
import { LoginComponent } from './components/login/login.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { ExtratoComponent } from './components/tela-principal/extrato/extrato.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TelaTedComponent,
    TelaPixComponent,
    ModalCadastrarChavePixComponent,
    ModalDestinatarioPixComponent,
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
