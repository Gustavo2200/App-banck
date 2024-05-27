import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaTedComponent } from './components/tela-ted/tela-ted.component';
import { TelaPixComponent } from './components/tela-pix/tela-pix.component';
import { ModalCadastrarChavePixComponent } from './components/modal-cadastrar-chave-pix/modal-cadastrar-chave-pix.component';
import { ModalDestinatarioPixComponent } from './components/modal-destinatario-pix/modal-destinatario-pix.component';
import { LoginComponent } from './components/login/login.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { ExtratoComponent } from './components/tela-principal/extrato/extrato.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CabecalhoComponent } from './components/tela-principal/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/tela-principal/rodape/rodape.component';
import { ModalSairContaComponent } from './components/tela-principal/cabecalho/modal-sair-conta/modal-sair-conta.component';
import { CommonModule } from '@angular/common';
import { TelaDigiteValorComponent } from './components/tela-digite-valor/tela-digite-valor.component';
import { Interceptor } from './config/Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TelaTedComponent,
    TelaPixComponent,
    ModalCadastrarChavePixComponent,
    ModalDestinatarioPixComponent,
    LoginComponent,
    CabecalhoComponent,
    TelaPrincipalComponent,
    ModalSairContaComponent,
    RodapeComponent,
    ExtratoComponent,
    CadastroClienteComponent,
    TelaDigiteValorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
