import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerPokemon } from './ejer-pokemon';

describe('EjerPokemon', () => {
  let component: EjerPokemon;
  let fixture: ComponentFixture<EjerPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjerPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjerPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
