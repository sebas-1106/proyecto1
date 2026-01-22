import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente6 } from '../componente6/componente6';
@Component({
  selector: 'app-componente5',
  imports: [CommonModule, Componente6],
  templateUrl: './componente5.html',
  styleUrl: './componente5.scss',
})
export class Componente5 {
  alumnos = ['Ana', 'Luis', 'Marta'];
  mostrar: boolean = true;
}
