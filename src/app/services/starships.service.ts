import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Starship, Details } from 'src/app/interfaces/starship';
import { SHIP_IMAGES } from '../../assets/data/shipimages';


@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  constructor() {}

  URL: string = 'https://swapi.dev/api/starships/';
  data: any = {};
  public starships: Starship[] = [];

  async getStarships() {
    let pageNum: number = 1; //how to change page?
    let response = await fetch(`${this.URL}?page=${pageNum}`, {
      headers: { Accept: 'application/json' },
    });

    //https://swapi.dev/api/starships/?page=4

    if (response) {
      this.data = await response.json();
      this.starships = this.data.results;
    }

    console.log(this.starships, pageNum);
    return this.data.results as Starship[];
  }

  getStarshipByName(name: string): Observable<Starship | undefined> {
    //checks the starship array and looks for a name in it, if it's found, returns said starship
    const starship: Starship | undefined = this.starships.find(
      (starship) => starship.name === name
    );
    return of(starship);
  }

  starshipImages:Details[] = SHIP_IMAGES;
  getStarshipDetailsByName(shipName:string):Details | undefined {
    let shipFound = this.starshipImages.find((starship)=> starship.name === shipName);
    return shipFound;
  }
}
