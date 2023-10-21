import { Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { inject } from '@angular/core';

export const autenticacaoUsuario = () =>
  new Promise(async (res, rej) => {
    // Injeção dos serviços necessários
    const spotifyService = inject(SpotifyService); // Injeção do serviço SpotifyService
    const router = inject(Router); // Injeção do módulo de roteamento Router

    // Função para redirecionar para a página de login e rejeitar a promessa
    const naoAuto = () => {
      localStorage.clear(); // Limpa o armazenamento local
      router.navigate(['/login']); // Navega para a rota '/login'
      rej('Usuario não autenticado'); // Rejeita a promessa com uma mensagem de erro
      return false; // Retorna falso
    };

    // Obtém o token do armazenamento local
    const token = localStorage.getItem('token');
    if (!token) {
      return naoAuto(); // Se não houver token, chama a função 'naoAuto'
    }

    // Inicializa o usuário com base no serviço SpotifyService
    const userCriado = await spotifyService.inicializarUsuario();
    if (userCriado) {
      res(true); // Resolve a promessa com 'true' se o usuário for inicializado com sucesso
    } else {
      res(naoAuto()); // Chama a função 'naoAuto' e resolve a promessa com seu valor
    }
    return false; // Retorna falso
  });
