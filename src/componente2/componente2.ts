import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente2.html',
  styleUrl: './componente2.scss',
})
export class Componente2 {
  titulo = 'Componente 2';
  subtitulo = "Curso angular";
  mostrarSubtitulo = true;
  img = 'https://angular.io/assets/images/logos/angular/angular.png';
  }
