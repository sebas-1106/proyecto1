import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rejilla } from './rejillas';

describe('Rejilla', () => {
  let component: Rejilla;
  let fixture: ComponentFixture<Rejilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rejilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rejilla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
