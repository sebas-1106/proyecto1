import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaGra } from './ficha-gra';

describe('FichaGra', () => {
  let component: FichaGra;
  let fixture: ComponentFixture<FichaGra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaGra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaGra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
