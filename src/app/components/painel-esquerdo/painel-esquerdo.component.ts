import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private spotifyService: SpotifyService, private router: Router) { }

  homeIcon = faHome;
  pesquisarIcon = faSearch;
  artistaIcon = faGuitar;
  playIcon = faMusic;

  menuSelect: string = 'home';

  botaoClick(value: string) {
    this.menuSelect = value;
    this.router.navigate([`/player/${value}`]);
  }

  // //Metodo secundario a apenas para o efeito de selecionado
  // botaoClickPlaylist(value: string) {
  //   this.menuSelect = value
  // }

  playlists: IPlaylist[] = [];

  // Array de objetos com as informações de cada botão do menu
  menus = [
    { descricao: 'home', icone: this.homeIcon },
    { descricao: 'pesquisar', icone: this.pesquisarIcon },
    { descricao: 'artistas', icone: this.artistaIcon },
  ];

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUser();
  }

  irParaPlaylist(id: string) {
    this.menuSelect = id
    this.router.navigateByUrl(`/player/lista/playlist/${id}`)
  }
}
