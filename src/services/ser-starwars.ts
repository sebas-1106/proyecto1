import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerStarwars {
  url: string ="https://hp-api.onrender.com/api/characters";
  constructor(private httpClient: HttpClient) {}

  getPersonajes(){
    // va a traer los datos de la api
    return this.httpClient.get(this.url);
  }
}
