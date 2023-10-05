import { IUsuario } from "../Interfaces/IUsuario"

export function criarSpotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagem: user.images.pop().url, //pega sempre a ultima URL das imagens
  }
}