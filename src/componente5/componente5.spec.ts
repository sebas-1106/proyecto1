import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente5 } from './componente5';

describe('Componente5', () => {
  let component: Componente5;
  let fixture: ComponentFixture<Componente5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
