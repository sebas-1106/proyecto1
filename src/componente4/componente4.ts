import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  imports: [],
  templateUrl: './componente4.html',
  styleUrl: './componente4.scss',
})
export class Componente4 {
  logo = 'assets/logo.png';
  ngOnInit() {

  }

  cambiarImagen(){
    this.logo="https://angular.io/assets/images/logos/angular/angular.png";
  }
}

