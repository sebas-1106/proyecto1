import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4 } from './componente4';

describe('Componente4', () => {
  let component: Componente4;
  let fixture: ComponentFixture<Componente4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
