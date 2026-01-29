import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Lukeskywalker } from '../lukeskywalker/lukeskywalker';
import { Personaje } from '../models/personaje';
@Component({
  selector: 'app-starwars',
  imports: [Lukeskywalker,CommonModule],
  templateUrl: './starwars.html',
  styleUrl: './starwars.scss',
})
export class Starwars {
datos: any;
//Declaro variable coleccion personajes
arrPersonajes: Personaje[] = [];
resultados:any;
  constructor(private apiService: ApiService) { }
   async ngOnInit() {

    //Hago mi llamada a la api, que luego en un futuro mi profe me explicara como se hace
    this.apiService.apiUrl = 'https://swapi.dev/api/people';
    let a = await this.apiService.getPosts();
    this.datos = await lastValueFrom(a);

    this.resultados=this.datos.results;
    console.log("this.datos",this.datos);
  }

  cargaNaves(e:any){
      //Esta funcion me pinta los datos de las naves de cada personaje
      this.arrPersonajes=e;
  }
}