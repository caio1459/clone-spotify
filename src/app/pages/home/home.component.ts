import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IMusica } from 'src/app/Interfaces/IMusica';
import { newMusica } from 'src/app/common/factory';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.obterMusicas()
    this.obterMusicaAtual()
  }

  ngOnDestroy(): void {
    //Destroi os objetos da memoria para evitar memoryLeak
    this.subs.forEach(sub => sub.unsubscribe())
  }

  playerIcon = faPlay
  musicas: IMusica[] = []
  musicaAtual: IMusica = newMusica()
  subs: Subscription[] = []

  async obterMusicas() {
    this.musicas = await this.spotifyService.buscarMusicas()
  }

  obterArtistas(musica: IMusica) {
    return musica.artistas.map(artista => artista.nome).join((', '))
  }

  obterMusicaAtual() {
    //Se inscreve para gerar um novo objeto na mémoria
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica
    })
    //adiciona um novo elemento na memoria
    this.subs.push(sub)
  }

  async executarMusica(musica: IMusica) {
    await this.spotifyService.executarMusica(musica.id)
    this.playerService.definirMusicaAtual(musica)
  }
}