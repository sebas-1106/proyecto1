import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerPokemon {
  url: string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500";
  constructor(private httpClient: HttpClient){

  }
  getPersonajes(){
    return this.httpClient.get(this.url);
  }
}
