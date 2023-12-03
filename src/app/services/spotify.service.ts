import { SpotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { IPlaylist } from '../Interfaces/IPlaylist';
import {
  criarMusicasPlayList,
  criarSpotifyPlaylist,
  criarSpotifyUser,
  criarTopArtista
} from '../common/spotifyHelper';
import { IUsuario } from '../Interfaces/IUsuario';
import { IArtista } from '../Interfaces/IArtista';
import { IMusica } from '../Interfaces/IMusica';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  usuario: IUsuario;

  //Gera uma url de login
  obterUrlLogin(): string {
    const authEndpoint: string = `${SpotifyConfiguration.authoEndpoint}?`;
    const clientId: string = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl: string = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes: string = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType: string = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  obterTokenUrl(): string {
    // Verifica se há dados após a '#' na URL
    if (window.location.hash) {
      // Divide a parte da URL após a '#' em parâmetros separados por '&'
      const params: string[] = window.location.hash.substring(1).split('&');
      // Extrai o valor do primeiro parâmetro após o caractere '='
      return params[0].split('=')[1];
    }
    // Retorna uma string vazia se não houver dados após a '#'
    return '';
  }

  definirTokenAcesso(token: string): void {
    this.spotifyApi.setAccessToken(token);
    // Salva o token
    localStorage.setItem('token', token);
    //this.spotifyApi.skipToNext(); -> Vai para a proxima musica
  }

  async inicializarUsuario() {
    if (!!this.usuario) {
      return true;
    }
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      this.definirTokenAcesso(token);
      await this.obterUser();
      return !!this.usuario;
    } catch (ex) {
      return false;
    }
  }

  async obterUser(): Promise<void> {
    //Pega as informações do usuario logado
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = criarSpotifyUser(userInfo);
  }

  async buscarPlaylistUser(offset: number = 0, limit: number = 50): Promise<IPlaylist[]> {
    try {
      //pega as informações da playlist do suer
      const playlist = await this.spotifyApi.getUserPlaylists(
        this.usuario?.id,
        { offset, limit }
      );
      return playlist.items.map(criarSpotifyPlaylist);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getTopArtista(limit: number = 10): Promise<IArtista[]> {
    const artistas = await this.spotifyApi.getMyTopArtists(limit)
    return artistas.items.map(criarTopArtista)
  }

  async buscarMusicas(offset: number = 0, limit: number = 50): Promise<IMusica[]> {
    const musicas = await this.spotifyApi.getMySavedTracks({ offset, limit })
    return musicas.items.map(x => criarMusicasPlayList(x.track))
  }

  async executarMusica(id: string) {
    await this.spotifyApi.queue(id)
    await this.spotifyApi.skipToNext()
  }
}
