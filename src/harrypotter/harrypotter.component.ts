import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Harryandhijos } from '../harryandhijos/harryandhijos';

@Component({
  selector: 'app-harrypotter',
  standalone: true,
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.scss'],
  imports: [CommonModule]
})
export class HarrypotterComponent implements OnInit {
  datos: any;
  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.apiService.apiUrl = 'https://hp-api.onrender.com/api/characters';
    let a = this.apiService.getPosts();
    this.datos = await lastValueFrom(a);
    console.log(this.datos);
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
    }else{
      salida = "perfil_chico";
    }
    return salida;
  }



}
