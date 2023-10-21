//Arquivo responsavel para mapear os objetos do spotify para um objeto do proprio projeto

import { IPlaylist } from "../Interfaces/IPlaylist"
import { IUsuario } from "../Interfaces/IUsuario"


export function criarSpotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagem: user.images.pop().url, //pega sempre a ultima URL das imagens
  }
}

export function criarSpotifyPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUlr: playlist.images.pop().url
  }
}