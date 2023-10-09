import { PainelDireitoComponent } from './../../components/painel-direito/painel-direito.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoter } from './player.routes';
import { PainelEsquerdoComponent } from 'src/app/components/painel-esquerdo/painel-esquerdo.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PlayerComponent, PainelEsquerdoComponent, PainelDireitoComponent, ButtonMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoter),
    FontAwesomeModule,
  ]
})
export class PlayerModule { }