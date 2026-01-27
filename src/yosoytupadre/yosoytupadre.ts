import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { lastValueFrom } from 'rxjs';
import { Harryandhijos } from '../harryandhijos/harryandhijos';

@Component({
  selector: 'app-yosoytupadre',
  imports: [Harryandhijos],
  templateUrl: './yosoytupadre.html',
  styleUrl: './yosoytupadre.scss',
})
export class Yosoytupadre {
  datos: any;
  constructor(private apiService: ApiService) { }
  async ngOnInit() {
    this.apiService.apiUrl = 'https://hp-api.onrender.com/api/characters';
    let a = await this.apiService.getPosts();
    this.datos = await lastValueFrom(a);
  }

  numero(e:any){
    let iCuenta=parseInt(e);

    alert(`Hay ${iCuenta} personajes`);
  }
}
