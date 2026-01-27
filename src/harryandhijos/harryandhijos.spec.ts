import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Harryandhijos } from './harryandhijos';

describe('Harryandhijos', () => {
  let component: Harryandhijos;
  let fixture: ComponentFixture<Harryandhijos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Harryandhijos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Harryandhijos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
