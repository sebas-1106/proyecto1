import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.scss']
})
export class HarrypotterComponent implements OnInit {

  personajes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(data => {
      this.personajes = data;
      console.log(this.personajes);
    });
  }

  obtenerGenero(gender: string): string {
    if (gender === 'male') {
      return 'Chico';
    } else if (gender === 'female') {
      return 'Chica';
    } else {
      return 'Desconocido';
    }
  }
}
