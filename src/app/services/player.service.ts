import { Injectable } from '@angular/core';
import { IMusica } from '../Interfaces/IMusica';
import { newMusica } from '../common/factory';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //Escuta qualquer alteração que tiver em um componente, quando hover uma alteração ele executa uma ação
  musicaAtual = new BehaviorSubject<IMusica>(newMusica())
  timerId: any = null

  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual()
  }

  async obterMusicaAtual() {
    //limpa o timer
    clearTimeout(this.timerId)
    //Obtenho a musica
    const musica = await this.spotifyService.obterMusicaAtual()
    this.definirMusicaAtual(musica)
    //Causo um intervalo de 3 segundos para pegar a musica atual
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual()
    }, 3000)
  }

  definirMusicaAtual(musica: IMusica) {
    this.musicaAtual.next(musica)
  }

  async voltarMusica() {
    await this.spotifyService.spotifyApi.skipToPrevious()
  }

  async proximaMusica() {
    await this.spotifyService.spotifyApi.skipToNext()
  }

  async pausarMusica() {
    await this.spotifyService.spotifyApi.pause()
  }

  async playMusica() {
    await this.spotifyService.spotifyApi.play()
  }
}
