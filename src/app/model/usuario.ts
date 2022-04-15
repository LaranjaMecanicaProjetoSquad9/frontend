import { Postagem } from './postagem';

export class Usuario {

  public dataNascimento: Date;
  public foto: string;
  public email: string;
  public funcao: string;
  public habilidade: string;
  public id: number;
  public nome: string;
  public senha: string;
  public telefone: string;
  public postagens: Postagem[];
}
