import { IMusica } from "./IMusica"

export interface IPlaylist {
  id: string
  nome: string
  imagemUlr: string
  musicas?: IMusica[]
}
