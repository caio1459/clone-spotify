import { IArtista } from "../Interfaces/IArtista";
import { IMusica } from "../Interfaces/IMusica";

//arquivo responsavel por gerar interfaces vazias
export function newArtista(): IArtista {
  return {
    id: '',
    nome: '',
    image: ''
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