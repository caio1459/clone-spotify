import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyServiceService) {}

  ngOnInit(): void {
    this.spotifyService.verificarToken();
  }

  abrirLogin(): void {
    window.location.href = this.spotifyService.obterUrlLogin();
  }
}
