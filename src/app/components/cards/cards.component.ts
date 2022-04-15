import { environment } from 'src/environments/environment.prod';
import { Usuario } from './../../model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from './../../service/usuario.service';
import { Component, OnInit } from '@angular/core';



@Component({
    selector:'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})

export class Cards implements OnInit{
  produto: Usuario = new Usuario();
  listaUsuario: Usuario[];



  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.findByUsuario();
    console.log(environment)
    if(environment.token == ''){
      this.router.navigate(['/login']);

    }

  }
    findByUsuario(){
    this.usuarioService.getAllUser().subscribe((resp: Usuario[]) =>{
      this.listaUsuario = resp;
    })


}
}
