import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.verificarToken();
  }

  abrirLogin(): void {
    window.location.href = this.spotifyService.obterUrlLogin();
  }

  verificarToken(): any {
    const token = this.spotifyService.obterTokenUrl();
    if (!!token) {
      this.spotifyService.definirTokenAcesso(token);
      this.router.navigate(['/player/home']);
    }
  }
}
