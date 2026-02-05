import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ang-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './ang-form.html',
  styleUrl: './ang-form.scss',
})
export class AngForm {
nombre = '';
email = '';
edad: number | null = null;
enviar() {
alert(`Nombre: ${this.nombre}, Email: ${this.email}, Edad: ${this.edad}`);
}
}
