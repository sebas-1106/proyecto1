import { TestBed } from '@angular/core/testing';

import { SerPokemon } from './ser-pokemon';

describe('SerPokemon', () => {
  let service: SerPokemon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerPokemon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
