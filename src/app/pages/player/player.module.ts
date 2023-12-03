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
import { TableComponent } from 'src/app/components/table/table.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    PainelDireitoComponent,
    ButtonMenuComponent,
    RodapeUserComponent,
    HomeComponent,
    CardTopArtistaComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoter),
    FontAwesomeModule,
  ],
})
export class PlayerModule {}
