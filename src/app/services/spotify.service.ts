import { SpotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from '../Interfaces/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class SpotifyServiceService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  constructor(private router: Router) {
    this.spotifyApi = new Spotify();
  }

  async iniciarUser() {
    if (!!this.usuario) {
      return true;
    }
    const token = localStorage.getItem('token');
    if (!!token) {
      return false;
    }
    try {
      this.definirTokenAcesso(token);
      await this.obterUser();
      return true;
    } catch (error) {
      return false;
    }
  }

  async obterUser() {
    const userInfo = await this.spotifyApi.getMe();
  }

  //Gera uma url de login
  obterUrlLogin(): string {
    const authEndpoint: string = `${SpotifyConfiguration.authoEndpoint}?`;
    const clientId: string = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl: string = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes: string = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType: string = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  verificarToken(): any {
    const token = this.obterTokenUrl();
    if (!!token) {
      this.definirTokenAcesso(token);
      this.router.navigate(['/player']);
    } else {
      this.router.navigate(['/login']);
    }
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
}
