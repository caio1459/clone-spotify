import { Component, OnInit } from '@angular/core';
import {
  faGuitar,
  faHome,
  faMusic,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss'],
})
export class PainelEsquerdoComponent implements OnInit {
  ngOnInit(): void {
    this.buscarPlaylists();
  }

  constructor(private spotifyService: SpotifyService) {}

  homeIcon = faHome;
  pesquisarIcon = faSearch;
  artistaIcon = faGuitar;
  playIcon = faMusic;

  menuSelect: string = 'Home';

  botaoClick(button: string) {
    this.menuSelect = button;
  }

  playlists: IPlaylist[] = [];

  // Array de objetos com as informações de cada botão do menu
  menus = [
    { descricao: 'Home', icone: this.homeIcon },
    { descricao: 'Pesquisar', icone: this.pesquisarIcon },
    { descricao: 'Artistas', icone: this.artistaIcon },
  ];

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUser();
    console.log(this.playlists);
  }
}
