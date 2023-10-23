import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/Interfaces/IUsuario';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-rodape-user',
  templateUrl: './rodape-user.component.html',
  styleUrls: ['./rodape-user.component.scss'],
})
export class RodapeUserComponent implements OnInit {
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = this.spotifyService.usuario;
  }

  iconExit = faSignOut;
  usuario: IUsuario;

  sair() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
