import { Injectable } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { IUsuario } from '../Interfaces/IUsuario';
import { criarSpotifyUser } from '../common/spotifyHelper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private spotifyService: SpotifyService) { }

  usuario: IUsuario;

  async iniciarUser(): Promise<boolean> {
    if (!!this.usuario) {
      return true;
    }
    const token = localStorage.getItem('token');
    if (!!token) {
      return false;
    }
    try {
      this.spotifyService.definirTokenAcesso(token)
      await this.obterUser();
      return !!this.usuario;
    } catch (error) {
      return false;
    }
  }

  async obterUser() {
    //Pega as informações do usuario logado
    const userInfo = await this.spotifyService.spotifyApi.getMe()
    this.usuario = criarSpotifyUser(userInfo)
    console.log(this.usuario)
  }
}
