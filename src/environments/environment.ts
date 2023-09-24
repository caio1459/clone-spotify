export const environment = {
  production: false,
};

export const SpotifyConfiguration = {
  //Configura o cliente do spotify
  clientId: '79ba179f7a2542c69a620ea935794012',
  //URL de autorização
  authoEndpoint: 'https://accounts.spotify.com/authorize',
  //URL para ser redirecionado após a autorização
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing', // musica tocando agora.
    'user-read-recently-played', // ler musicas tocadas recentemente
    'user-read-playback-state', // ler estado do player do usuario
    'user-top-read', // top artistas e musicas do usuario
    'user-modify-playback-state', // alterar do player do usuario.
    'user-library-read', // ler biblioteca dos usuarios
    'playlist-read-private', // ler playlists privadas
    'playlist-read-collaborative', // ler playlists colaborativas
  ],
};
