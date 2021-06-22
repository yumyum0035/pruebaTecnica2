import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Starship, Details } from 'src/app/interfaces/starship';
import { StarshipsService } from '../../services/starships.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss'],
})
export class StarshipDetailComponent implements OnInit {
  constructor(
    private starshipServ: StarshipsService,
    private router: Router,
    private user: UsersService
  ) {}

  starship: Starship | undefined;
  data: any;
  isLogged: boolean = false;
  src: string = "";
  description: string = "";

  ngOnInit(): void {
    this.getStarship();
    this.isLogged = this.user.isLogged;
  }

  getStarship() {
    //we get the url and remove %20 to get the spaceship name:
    let ship = decodeURI(this.router.url.split('/')[2]);
    console.log('starship name:', ship);

    //we check if the name matches any name in the spaceship array we have
    this.starshipServ
      .getStarshipByName(ship)
      .subscribe((ship) => (this.starship = ship));

    let starshipFound = this.starshipServ.getStarshipDetailsByName(ship);

    this.src = starshipFound!.src;
    this.description = starshipFound!.descrip!;

    console.log(this.starship);
  }

  go(where: string) {
    this.router.navigate([where]);
  }
}
