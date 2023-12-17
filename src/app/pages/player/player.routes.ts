import { Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HomeComponent } from '../home/home.component';
import { ListaComponent } from '../lista/lista.component';

export const PlayerRoter: Routes = [
  {
    path: '',
    component: PlayerComponent,
    //gera um filho do componete pai. Ex: player/home
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'lista/:tipo/:id',
        component: ListaComponent
      }
    ],
  },
];
