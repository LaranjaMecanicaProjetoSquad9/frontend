import { Postagem } from './../../model/postagem';
import { environment } from 'src/environments/environment.prod';
import { UsuarioService } from './../../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Component } from '@angular/core';


@Component({
    selector:'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss']
})

export class Perfil{
  usuario: Usuario = new Usuario();
  idUsuario: number;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService

  ) { }

  ngOnInit() {
    this.usuarioService.refreshToken();
    this.idUsuario = this.route.snapshot.params['id'];
    this.findById(this.idUsuario);
    console.log(this.usuario.postagens);



    if (environment.token == '') {
      this.router.navigate(['/login'])}

  }

  findById(id: number){
    this.usuarioService.getIdUser(id).subscribe((resp: Usuario)=>{
      this.usuario = resp;
    })
  }

}
