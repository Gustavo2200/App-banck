import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaPixComponent } from './components/tela-pix/tela-pix.component';
import { ModalCadastrarChavePixComponent } from './components/modal-cadastrar-chave-pix/modal-cadastrar-chave-pix.component';
import { ModalDestinatarioPixComponent } from './components/modal-destinatario-pix/modal-destinatario-pix.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaPixComponent,
    ModalCadastrarChavePixComponent,
    ModalDestinatarioPixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
