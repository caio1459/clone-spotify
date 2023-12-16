import { Component, OnInit } from '@angular/core';
import { IArtista } from 'src/app/Interfaces/IArtista';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artistas',
  templateUrl: './top-artistas.component.html',
  styleUrls: ['./top-artistas.component.scss']
})
export class TopArtistasComponent implements OnInit {

  artistas: IArtista[]

  constructor(private spotifiService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarTopArtistas()
  }

  async buscarTopArtistas() {
    this.artistas = await this.spotifiService.getTopArtista(5)
  }
}
