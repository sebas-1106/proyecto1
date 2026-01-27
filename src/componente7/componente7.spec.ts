import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente7 } from './componente7';

describe('Componente7', () => {
  let component: Componente7;
  let fixture: ComponentFixture<Componente7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
