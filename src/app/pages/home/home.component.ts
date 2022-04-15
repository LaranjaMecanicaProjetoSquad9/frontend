import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from './../../service/postagem.service';
import { Postagem } from './../../model/postagem';
import { environment } from 'src/environments/environment.prod';
import { UsuarioService } from './../../service/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './../../model/usuario';
import { Component, OnInit } from '@angular/core';


@Component({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomePage implements OnInit{
  usuario: Usuario = new Usuario();
  idUsuario: number;
  idUser = environment.id;
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private postagemService: PostagemService,
    private alertas: AlertasService



  ) { }

  ngOnInit() {
    this.usuarioService.refreshToken();
    this.postagemService.refreshToken();
    //this.idUsuario = this.route.snapshot.params['id'];
    this.findById(this.idUser);
    this.findByAll();
    

    if (environment.token == '') {
      this.router.navigate(['/login'])}

  }

  findById(idUser: number){
    this.usuarioService.getIdUser(idUser).subscribe((resp: Usuario)=>{
      this.usuario = resp;
    })
  }

  findByAll(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp;
    })
  }

  Postar(){
      this.postagem.usuario = this.usuario;
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp;
      this.findByAll();
      this.alertas.showAlertSuccess("Postagem realizada com sucesso!")
      this.usuario = new Usuario();
    })
  }

}

