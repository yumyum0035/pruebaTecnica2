import { Component, OnInit } from '@angular/core';
import { Starship, Details } from 'src/app/interfaces/starship';
import { StarshipsService } from '../../services/starships.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent implements OnInit {
  constructor(
    private starshipServ: StarshipsService,
    private user: UsersService
  ) {}

  starships: Starship[] = [];
  isLogged: boolean = false;
  currentPage: number = 1;

  ngOnInit(): void {
    this.getStarships(); //calls API
    this.isLogged = this.user.isLogged;
  }

  async getStarships() {
    this.starships = await this.starshipServ.getStarships();
  }

  onScroll() {
    console.log('scrolled!!');
  }
}
