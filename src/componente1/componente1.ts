import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.scss',
})
export class Componente1 {

  varJs: string='Estais todos aprobados';

  contar(params:number) {
    let a = 0;

    return a + params;
  }
}
