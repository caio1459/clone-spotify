import { Router, Routes } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { inject } from '@angular/core';
import { autenticacaoUsuario } from './resolver/autenticacao.resolver';

export const AppRoutes: Routes = [
  {
    path: '', //Quando for vazio
    redirectTo: 'player', //redireciona para a pagina de player, se não tiver o token vai para login
    pathMatch: 'full', //Verifica se o nome da rota é igual
  },
  {
    path: 'login', //caminho que vai bater na url
    //chama o componete que vai ser carregado
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((m) => m.PlayerModule),
    resolve: {
      userLogado: autenticacaoUsuario,
    },
  },
];
