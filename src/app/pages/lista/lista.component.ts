import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IMusica } from 'src/app/Interfaces/IMusica';
import { newMusica } from 'src/app/common/factory';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  constructor(
    private activeRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) { }

  musicas: IMusica[] = []
  musicaAtual: IMusica = newMusica()
  playerIcon = faPlay
  bannerImageUlr: string
  bannerTexto: string
  subs: Subscription[] = []
  titulo: string

  ngOnInit(): void {
    this.obterMusicas()
    this.obterMusicaAtual()
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  //Muda o componete de acordo com os parametros da url
  obterMusicas() {
    const sub = this.activeRoute.paramMap.
      subscribe(async params => {
        const tipo = params.get('tipo')
        const id = params.get('id')
        await this.obterDadosPagina(tipo, id)
      })
    //adiciona um sub dentro do array
    this.subs.push(sub)
  }

  async obterDadosPagina(tipo: string, id: string) {
    if (tipo === 'playlist')
      await this.obterDadosPlaylist(id)
    else
      await this.obterDadosArtista(id)
  }

  async obterDadosPlaylist(id: string) {
    const playlistMusicas = await this.spotifyService.buscarMusicasPlaylist(id)
    this.definirDados(playlistMusicas.nome, playlistMusicas.imagemUlr, playlistMusicas.musicas)
    this.titulo = `Musicas Playlist: ${playlistMusicas.nome}`
  }

  async obterDadosArtista(id: string) {

  }

  definirDados(texto: string, image: string, musicas: IMusica[]) {
    this.bannerImageUlr = image
    this.bannerTexto = texto
    this.musicas = musicas
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

  obterArtistas(musica: IMusica) {
    return musica.artistas.map(artista => artista.nome).join((', '))
  }
}
