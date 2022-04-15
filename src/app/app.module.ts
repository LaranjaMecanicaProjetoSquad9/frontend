import { Navbar } from './components/navbar/navbar.component';
import { Agendamentos } from './pages/agendamentos/agendamentos.component';
import {  Forum } from './pages/forum/forum.component';
import { Cadastro } from './pages/cadastro/cadastro.component';
import { Perfil } from './pages/perfil/perfil.component';
import { Lista } from './pages/lista/lista.component';
import { HomePage } from './pages/home/home.component';

import { Cards } from './components/cards/cards.component';
import { Aside } from './components/aside/aside.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Login } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { Header } from './components/header/header.component';
import { AlertasComponent } from './alertas/alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Aside,
    Header,
    Cards,
    HomePage,
    Lista,
    Perfil,
    Cadastro,
    Forum,
    AlertasComponent,
    Agendamentos,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
