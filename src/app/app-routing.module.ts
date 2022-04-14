import { HomePage } from './pages/home/home.component';
import { Agendamentos } from './pages/agendamentos/agendamentos.component';
import { Perfil } from './pages/perfil/perfil.component';
import { Login } from './pages/login/login.component';
import { Lista } from './pages/lista/lista.component';
import { Cadastro } from './pages/cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},

  {path: 'cadastrar' , component:Cadastro},
  {path: 'lista' , component:Lista},
  {path: 'login' , component:Login},
  {path: 'perfil' , component:Perfil},
  {path: 'agenda' , component:Agendamentos},
  {path: 'home' , component:HomePage}
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
