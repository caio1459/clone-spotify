import { SpotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyServiceService {
  private spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  //Gera uma url de login
  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authoEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  verificarTokenUrl() {
    const token = this.obterTokenUrl();
    if (!!token) {
      this.definirTokenAcesso(token);
    }
  }

  obterTokenUrl(): string {
    // Verifica se há dados após a '#' na URL
    if (window.location.hash) {
      // Divide a parte da URL após a '#' em parâmetros separados por '&'
      const params = window.location.hash.substring(1).split('&');
      // Extrai o valor do primeiro parâmetro após o caractere '='
      console.log(params[0].split('=')[1])
      return params[0].split('=')[1];
    }
    // Retorna uma string vazia se não houver dados após a '#'
    return '';
  }

  definirTokenAcesso(token: string) {
    this.spotifyApi.setAccessToken(token);
    // Salva o token
    localStorage.setItem('token', token);
    //Vai para a proxima musica
    this.spotifyApi.skipToNext();
  }
}
