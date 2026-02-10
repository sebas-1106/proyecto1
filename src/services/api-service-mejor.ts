import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Apiservicemejor {
  public apiUrl: string = ''; // ejemplo
  public dato: string = ''; // ejemplo
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  async datoCampoAPI() {
    let salida: any;
    let a = await this.getPosts();
    let datos = await lastValueFrom(a);
    if (datos[this.dato]) {
      salida = datos[this.dato];
    }
    return salida;
  }
}
