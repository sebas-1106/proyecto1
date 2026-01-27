import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-componente6',
  imports: [],
  templateUrl: './componente6.html',
  styleUrl: './componente6.scss',
})
export class Componente6 {
  @Input() valor!: number;
  @Output() notificar = new EventEmitter<string>();
  ngOnInit() {

  }
  avisar() {
    this.notificar.emit(' pepino');
  }
}
