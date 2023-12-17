import { PainelDireitoComponent } from './../../components/painel-direito/painel-direito.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoter } from './player.routes';
import { PainelEsquerdoComponent } from 'src/app/components/painel-esquerdo/painel-esquerdo.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUserComponent } from 'src/app/components/rodape-user/rodape-user.component';
import { HomeComponent } from '../home/home.component';
import { CardTopArtistaComponent } from 'src/app/components/card-top-artista/card-top-artista.component';
import { BuscasRecentesComponent } from 'src/app/components/buscas-recentes/buscas-recentes.component';
import { FormsModule } from '@angular/forms';
import { TopArtistasComponent } from 'src/app/components/top-artistas/top-artistas.component';
import { ArtistaItemComponent } from 'src/app/components/artista-item/artista-item.component';
import { PlayerCardComponent } from 'src/app/components/player-card/player-card.component';
import { ListaComponent } from '../lista/lista.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    PainelDireitoComponent,
    ButtonMenuComponent,
    RodapeUserComponent,
    HomeComponent,
    CardTopArtistaComponent,
    BuscasRecentesComponent,
    TopArtistasComponent,
    ArtistaItemComponent,
    PlayerCardComponent,
    ListaComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoter),
    FontAwesomeModule,
    FormsModule
  ],
})
export class PlayerModule { }
