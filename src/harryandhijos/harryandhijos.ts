import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-harryandhijos',
  imports: [CommonModule],
  templateUrl: './harryandhijos.html',
  styleUrl: './harryandhijos.scss',
})
export class Harryandhijos {

  @Input() datos: any;
  @Output() notificar = new EventEmitter<number>();
  ngOnInit() {

  }
  contarElementos() {
    
    let iCuenta = this.datos?.length || 0;
    this.notificar.emit(iCuenta);
  }
  chico(per: any): boolean {
    let salida: boolean = false;
    if (per.gender == "male") {
      salida = true;
    }
    return salida;
  }

  chica(per: any): boolean {
    let salida: boolean = false;
    if (per.gender == "female") {
      salida = true;
    }
    return salida;
  }
  perfil(per: any): string {
    let salida: string = "";
    if (per.gender == "female") {
      salida = "perfil_chica";
    } else {
      salida = "perfil_chico";
    }
    return salida;
  }

}
