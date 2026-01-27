import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Componente1 } from '../componente1/componente1';
@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [FormsModule, Componente1, CommonModule],
  templateUrl: './componente3.html',
  styleUrl: './componente3.scss',
})
export class Componente3 {
  titulo: string = "Javi asi se hace algo de código cambio cambio cambio ";
  contador: number = 0;
  nombre:string="";
  alumnos: string[] = ['Javi', 'Ana', 'Luis', 'Pepe'];
  mostrar= true;

  ngOnInit() {
    this.contador = 10;
  }

  incrementar() {
    this.contador++;
  }
  mensaje(){
    alert(this.nombre);
  }

  restar() {
    this.contador--;

    if(this.contador<0){
      alert('HADOKKEN!!!!');
    }
  }
}
