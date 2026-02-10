import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejillasPokemon } from './rejillas-pokemon';

describe('RejillasPokemon', () => {
  let component: RejillasPokemon;
  let fixture: ComponentFixture<RejillasPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejillasPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejillasPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
