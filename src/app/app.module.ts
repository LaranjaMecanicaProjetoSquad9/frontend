import { Perfil } from './pages/perfil/perfil.component';
import { Lista } from './pages/lista/lista.component';
import { HomePage } from './pages/home/home.component';
import { Container } from './components/container/container.component.';
import { Cards } from './components/cards/cards.component';
import { Aside } from './components/aside/aside.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Login } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { Header } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Aside,
    Header,
    Cards,
    Container,
    HomePage,
    Lista,
    Perfil
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }