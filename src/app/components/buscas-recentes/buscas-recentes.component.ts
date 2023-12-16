import { Component } from '@angular/core';

@Component({
  selector: 'app-buscas-recentes',
  templateUrl: './buscas-recentes.component.html',
  styleUrls: ['./buscas-recentes.component.scss']
})
export class BuscasRecentesComponent {
  pesquisasRecentes: string[] = []

  campoPesquisa: string

  definirPesquisa(pesquisa: string) {
    this.campoPesquisa = pesquisa
  }

  salvarPesquisa() {
    this.pesquisasRecentes.push(this.campoPesquisa)
    this.limparCampos()

  }
  
  limparCampos() {
    this.campoPesquisa = ""
  }
}
