import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Personaje } from '../models/personaje';
import { Naves } from '../models/naves';
import { Peliculas } from '../models/peliculas';
@Component({
  selector: 'app-lukeskywalker',
  imports: [CommonModule],
  templateUrl: './lukeskywalker.html',
  styleUrl: './lukeskywalker.scss',
})
export class Lukeskywalker {
  constructor(private apiService: ApiService) { }
  //Una variable de entrada con los datos
  @Input() datos: any;
  //Una funcion de tipo coleccionpersonajes que emita mi coleccion de personajes al padre
  @Output() enviarPersonajes = new EventEmitter<Personaje[]>();
  arrPersonajes: Personaje[] = [];
  async ngOnInit() {
    //Con los datos que vienen del padre pinto los personajes con sus pelis, mas cargo los datos
    await this.pintaPelisyNaves();

  }

  async pintaPelisyNaves() {
    //Me construira el objeto de personaje pelis y naves
    if (!this.datos) return;
    for (let per of this.datos) {
      //Me creo un personaje vacio
      let oPer: Personaje = new Personaje();
      oPer.nombre = per.name;

      //Cargo las naves del personaje con una funcion asincrona pq quiero llamar a la api
      let arrNaves: Naves[] = [];
      arrNaves = await this.llamadaNaves(per.starships);
      oPer.naves = arrNaves;

      //Cargo las pelis del personaje con una funcion asincrona pq quiero llamar a la api
      let arrPelis: Peliculas[] = [];
      arrPelis = await this.llamadaPelis(per.films);
      oPer.pelis = arrPelis;

      this.arrPersonajes.push(oPer);
    }


    //Cuando termine de construirlo emito al padre
    this.enviarPersonajes.emit(this.arrPersonajes);
  }

  async llamadaNaves(starships: any): Promise<Naves[]> {
    //Esta funcion me llamara a cada una de las apis de naves e ira construyendo mi arr Naves
    let arrNaves: Naves[] = [];
    for (let ss of starships) {
      //Me instancion un objeto nuevo de nave
      let naveNue: Naves = new Naves();

      //LLamo a la url de la api de naves y me traigo el objeto
      this.apiService.apiUrl = ss;
      let a = await this.apiService.getPosts();
      let oNave = await lastValueFrom(a);

      //Si tiene dato lo pusheo al array
      if (oNave != null) {
        naveNue.model = oNave.model;
        naveNue.name = oNave.name;
        arrNaves.push(naveNue);
      }

    }

    return arrNaves;
  }

  async llamadaPelis(films: any): Promise<Peliculas[]> {
    //Esta funcion me llamara a cada una de las apis de naves e ira construyendo mi arr Naves
    let arrPelis: Peliculas[] = [];
    for (let fil of films) {
      //Me instancion un objeto nuevo de nave
      let peliNue: Peliculas = new Peliculas();

      //LLamo a la url de la api de naves y me traigo el objeto
      this.apiService.apiUrl = fil;
      let a = await this.apiService.getPosts();
      let oPeli = await lastValueFrom(a);

      //Si tiene dato lo pusheo al array
      if (oPeli != null) {
        peliNue.title = oPeli.title;
        peliNue.opening_crawl = oPeli.opening_crawl;
        arrPelis.push(peliNue);
      }

    }

    return arrPelis;
  }
}