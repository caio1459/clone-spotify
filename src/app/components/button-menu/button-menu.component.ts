import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent {
  @Input()
  descricao: string

  @Input()
  selecionado: boolean = false

  @Output()
  //cria um evento personalizado
  click = new EventEmitter<void>()

  onClick() {
    //pega o valor do click
    this.click.emit()
  }
}
