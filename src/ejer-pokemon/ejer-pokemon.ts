import { Component } from '@angular/core';
import { SerPokemon } from '../services/ser-pokemon';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ejer-pokemon',
  imports: [],
  templateUrl: './ejer-pokemon.html',
  styleUrl: './ejer-pokemon.scss',
})
export class EjerPokemon {
  personajes: any;
  constructor(private serPokemon: SerPokemon){}

  async ngOnInit(){
    let a = this.serPokemon.getPersonajes()
    let datos= await lastValueFrom(a);
    this.personajes=datos;
    console.log("Personajes", this.personajes.results);

  }
}
