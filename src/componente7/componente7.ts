import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente7.html',
  styleUrl: './componente7.scss',
})
export class Componente7 {
  nombre = '';
 email = '';
 edad: number | null = null;
 enviar() {
 alert(`Nombre: ${this.nombre}, Email: ${this.email}, Edad: ${this.edad}`);
 }
}
