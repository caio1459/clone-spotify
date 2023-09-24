import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '', //Quando for vazio
    redirectTo: 'login', //redireciona para a pagina de login
    pathMatch: 'full', //Verifica se o nome da rota é igual 
  },
  {
    path: 'login', //caminho que vai bater na url
    //chama o componete que vai ser carregado
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];
