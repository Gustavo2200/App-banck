import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPixComponent } from './components/tela-pix/tela-pix.component';
import { ModalCadastrarChavePixComponent } from './components/modal-cadastrar-chave-pix/modal-cadastrar-chave-pix.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';

const routes: Routes = [
  {
    path: "pix",
    component: TelaPixComponent
  },
  {
    path: "cadastrar-chave-pix",
    component: ModalCadastrarChavePixComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"cadastrar-cliente",
    component: CadastroClienteComponent
  },
  {
    path: "tela-principal",
    component: TelaPrincipalComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
