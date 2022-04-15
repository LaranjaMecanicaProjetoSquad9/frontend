import { Usuario } from 'src/app/model/usuario';

export class Postagem{
  public id: number;
  public titulo: string;
  public texto: string;
  public foto: string;
  public usuario: Usuario;
}
