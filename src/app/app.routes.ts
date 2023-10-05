import { Routes } from '@angular/router';

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
  },
];
