import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPixComponent } from './components/tela-pix/tela-pix.component';
import { ModalCadastrarChavePixComponent } from './components/modal-cadastrar-chave-pix/modal-cadastrar-chave-pix.component';

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
    path: "",
    redirectTo: "pix",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
