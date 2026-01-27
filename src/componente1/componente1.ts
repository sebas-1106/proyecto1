import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1', //nombre de la etiqueta HTML
  imports: [],
  templateUrl: './componente1.html', // ruta al archivo HTML
  styleUrl: './componente1.scss', // ruta al archivo CSS/SCSS
})
export class Componente1 {

  title: string = 'Angular DAW';
  contador: number = 10;
  incrementar() {
    this.contador++;
  }
  restar(){
    this.contador--;
  }
}
