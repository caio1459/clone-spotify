import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IMusica } from 'src/app/Interfaces/IMusica';
import { newMusica } from 'src/app/common/factory';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.obterMusicaTocando()
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  musica: IMusica = newMusica()
  subs: Subscription[] = []
  anteriorIcon = faStepBackward
  proximoIcon = faStepForward
  playerIcon = faPlay
  pauseIcon = faPause

  async obterMusicaTocando() {
    const sub = await this.playerService.musicaAtual.subscribe(musica => this.musica = musica)
    this.subs.push(sub)
  }

  voltarMusica() {
    this.playerService.voltarMusica()
  }

  proximaMusica() {
    this.playerService.proximaMusica()
  }

  pausarMusica() {
    this.playerService.pausarMusica()
  }

  playMusica() {
    this.playerService.playMusica()
  }
}
