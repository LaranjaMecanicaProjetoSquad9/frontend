import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
    selector:'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})

export class Cadastro implements OnInit{

  usuario: Usuario = new Usuario();
  confirmarSenha: string;
  tipoUsuario: string;


  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
    ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    if(this.usuario.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('Senha incorreta!')
    }
    else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=> {
        this.usuario = resp
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
  }


}
