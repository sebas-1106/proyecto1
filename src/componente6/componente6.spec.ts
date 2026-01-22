import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente6 } from './componente6';

describe('Componente6', () => {
  let component: Componente6;
  let fixture: ComponentFixture<Componente6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
