import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artista-item',
  templateUrl: './artista-item.component.html',
  styleUrls: ['./artista-item.component.scss']
})
export class ArtistaItemComponent {

  @Input() img: string

  @Output() click = new EventEmitter<void>()

  onClick(){
    this.click.emit()
  }
}
