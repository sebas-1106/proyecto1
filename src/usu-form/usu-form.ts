import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usu-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './usu-form.html',
  styleUrl: './usu-form.scss',
})
export class UsuForm {
  nombre: string= '';
  email: string= '';
  usuarios: { nombre: string; email: string }[] = [];
  agregarUsuario() {
  this.usuarios.push({ nombre: this.nombre, email: this.email });
  this.nombre = '';
  this.email = '';
  }
}
