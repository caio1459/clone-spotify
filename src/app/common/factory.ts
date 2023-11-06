import { IArtista } from "../Interfaces/IArtista";

//arquivo responsavel por gerar interfaces vazias
export function newArtista(): IArtista {
  return {
    id: '',
    nome: '',
    image: ''
  }
}