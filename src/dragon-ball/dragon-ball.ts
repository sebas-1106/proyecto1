import { Component } from '@angular/core';
import { FichaPeq } from './ficha-peq/ficha-peq';
import { FichaGra } from './ficha-gra/ficha-gra';
import { Tabla } from './tabla/tabla';
@Component({
  selector: 'app-dragon-ball',
  imports: [FichaPeq, FichaGra, Tabla],
  templateUrl: './dragon-ball.html',
  styleUrl: './dragon-ball.scss',
})
export class DragonBall {

}
