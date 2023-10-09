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

  async obterUser() {
    //Pega as informações do usuario logado
    const userInfo = await this.spotifyService.spotifyApi.getMe()
    this.usuario = criarSpotifyUser(userInfo)
  }
}
