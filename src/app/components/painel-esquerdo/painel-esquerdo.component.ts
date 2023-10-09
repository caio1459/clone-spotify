import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent {
  homeIcon = faHome
  pesquisarIcon = faSearch
  artistaIcon = faGuitar
  playIcon = faMusic

  menuSelect: string = 'Home'

  botaoClick(button: string){
    this.menuSelect = button
  }
}
