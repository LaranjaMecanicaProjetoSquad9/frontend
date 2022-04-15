import { Postagem } from './../model/postagem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://technicalshare-api.herokuapp.com/postagens', this.token)
  }

  getIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://technicalshare-api.herokuapp.com/postagens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://technicalshare-api.herokuapp.com/postagens/postar', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://technicalshare-api.herokuapp.com/postagens/atualizar', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete<Postagem>(`https://technicalshare-api.herokuapp.com/postagens/${id}`, this.token)
  }

}
