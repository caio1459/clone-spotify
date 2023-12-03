import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IMusica } from 'src/app/Interfaces/IMusica';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.obterMusicas()
  }

  playerIcon = faPlay

  musicas: IMusica[]

  async obterMusicas() {
    this.musicas = await this.spotifyService.buscarMusicas()
    console.log(this.musicas)
  }

  obterArtistas(musica: IMusica) {
    return musica.artistas.map(artista => artista.nome).join((', '))
  }

  async executarMusica(musica: IMusica) {
    await this.spotifyService.executarMusica(musica.id)
  }
}
