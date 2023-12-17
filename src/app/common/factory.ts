import { IArtista } from "../Interfaces/IArtista";
import { IMusica } from "../Interfaces/IMusica";
import { IPlaylist } from "../Interfaces/IPlaylist";

//arquivo responsavel por gerar interfaces vazias
export function newArtista(): IArtista {
  return {
    id: '',
    nome: '',
    image: '',
    musicas: []
  }
}

export function newMusica(): IMusica {
  return {
    id: '',
    artistas: [],
    album: {
      id: "",
      nome: "",
      imagemUrl: "",
    },
    tempo: '',
    titulo: ''
  }
}

export function newPlaylist(): IPlaylist {
  return {
    id: '',
    imagemUlr: '',
    nome: '',
    musicas: []
  }
}