import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yosoytupadre } from './yosoytupadre';

describe('Yosoytupadre', () => {
  let component: Yosoytupadre;
  let fixture: ComponentFixture<Yosoytupadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yosoytupadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yosoytupadre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
