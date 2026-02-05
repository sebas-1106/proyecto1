import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPeq } from './ficha-peq';

describe('FichaPeq', () => {
  let component: FichaPeq;
  let fixture: ComponentFixture<FichaPeq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaPeq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaPeq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
