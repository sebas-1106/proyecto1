import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente8 } from './componente8';

describe('Componente8', () => {
  let component: Componente8;
  let fixture: ComponentFixture<Componente8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
