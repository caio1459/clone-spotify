//Arquivo responsavel para mapear os objetos do spotify para um objeto do proprio projeto
import { addMilliseconds, format } from "date-fns"
import { IArtista } from "../Interfaces/IArtista"
import { IMusica } from "../Interfaces/IMusica"
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

export function criarTopArtista(artista: SpotifyApi.ArtistObjectFull): IArtista {
  return {
    id: artista.id,
    nome: artista.name,
    image: artista.images.sort((a, b) => a.width - b.width).pop().url
  }
}

export function criarMusicasPlayList(musicas: SpotifyApi.TrackObjectFull): IMusica {

  const mlSegundosParaMinutos = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms)
    return format(data, 'mm:ss')
  }

  return {
    id: musicas.uri,
    titulo: musicas.name,
    album: {
      id: musicas.id,
      nome: musicas.album.name,
      imagemUrl: musicas.album.images.shift().url
    },
    artistas: musicas.artists.map(artista => ({
      id: artista.id,
      nome: artista.name
    })),
    tempo: mlSegundosParaMinutos(musicas.duration_ms),
  }
}