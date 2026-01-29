import { Naves } from "./naves";
import { Peliculas } from "./peliculas";

//Necesitare una clase personaje que tenga 3 propiedades nombre, pelis y naves
export class Personaje {
    nombre: string = "";
    naves: Naves[] = [];
    pelis: Peliculas[] = [];

}