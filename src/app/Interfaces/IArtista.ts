import { IMusica } from "./IMusica"

export interface IArtista {
  id: string
  nome: string
  image: string
  musicas?: IMusica[]
}