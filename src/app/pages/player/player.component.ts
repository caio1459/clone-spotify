import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private router: Router) { }

  token = localStorage.getItem('token')

  ngOnInit(): void {
    // if (!this.token) {
    //   this.router.navigate(['/login'])
    // }
  }
}
