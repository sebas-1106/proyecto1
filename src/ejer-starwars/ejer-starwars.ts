import { Component } from '@angular/core';
import { SerStarwars } from '../services/ser-starwars';

@Component({
  selector: 'app-ejer-starwars',
  imports: [],
  templateUrl: './ejer-starwars.html',
  styleUrl: './ejer-starwars.scss',
})
export class EjerStarwars {
  personajes: any;
  constructor(private serStarwars: SerStarwars) {}

  ngOnInit(){
    let a= this.serStarwars.getPersonajes().subscribe(x=>this.personajes=x);
    console.log("a", this.personajes);
  }
}
