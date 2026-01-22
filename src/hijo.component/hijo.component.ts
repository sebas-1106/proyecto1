import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnChanges {

  @Input() listaPersonajes: any[] = [];
  @Output() totalEmitido = new EventEmitter<number>();

  ngOnChanges(): void {
    // Cada vez que llegan datos nuevos, emitimos el total
    this.totalEmitido.emit(this.listaPersonajes.length);
  }
}
