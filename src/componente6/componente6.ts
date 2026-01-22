import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente6',
  imports: [],
  templateUrl: './componente6.html',
  styleUrl: './componente6.scss',
})
export class Componente6 {
@Input() valor!: number;

ngOnInit(){
  
}
}
