import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Apiservicemejor } from '../services/api-service-mejor';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-rejilla',
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './rejillas.html',
  styleUrl: './rejillas.scss',
})
export class Rejilla {
  //displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
  displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  constructor(private apiservicemejor: Apiservicemejor) {
    this.apiservicemejor.apiUrl = "https://rickandmortyapi.com/api/character";
    this.apiservicemejor.dato = "results";

  }

  async ngOnInit() {
    await this.cargarDatos();
  }

  async cargarDatos() {
    this.dataSource.data = await this.apiservicemejor.datoCampoAPI();
    console.log("datasource",this.dataSource);
  }
}
