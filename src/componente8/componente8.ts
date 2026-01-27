import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-componente8',
  imports: [FormsModule, CommonModule],
  templateUrl: './componente8.html',
  styleUrl: './componente8.scss',
})
export class Componente8 {
  nombre = '';
 email = '';
 edad: number | null = null;
  usuarios: { nombre: string; email: string }[] = [];
  agregarUsuario() {
  this.usuarios.push({ nombre: this.nombre, email: this.email });
  this.nombre = '';
  this.email = ''
}
}
