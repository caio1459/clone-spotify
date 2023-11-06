import { Component, OnInit } from '@angular/core';
import { IArtista } from 'src/app/Interfaces/IArtista';
import { newArtista } from 'src/app/common/factory';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-card-top-artista',
  templateUrl: './card-top-artista.component.html',
  styleUrls: ['./card-top-artista.component.scss']
})
export class CardTopArtistaComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarArtista()
  }

  topArtista: IArtista = newArtista()

  //Busca o primeiro artista mais ouvido
  async buscarArtista() {
    const artistas = await this.spotifyService.getTopArtista(1);
    if (!!artistas) {
      this.topArtista = artistas.pop()
    }
  }
}
