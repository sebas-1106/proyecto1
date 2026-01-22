import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html'
})
export class PadreComponent implements OnInit {

  personajes: any[] = [];
  totalDesdeHijo: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://hp-api.onrender.com/api/characters')
      .subscribe(data => {
        this.personajes = data;
      });
  }

  recibirTotal(total: number) {
    this.totalDesdeHijo = total;
    alert(`Número de personajes recibidos del hijo: ${total}`);
  }
}
