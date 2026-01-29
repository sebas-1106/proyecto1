import { TestBed } from '@angular/core/testing';

import { ApiServiceMejor } from './api-service-mejor';

describe('ApiServiceMejor', () => {
  let service: ApiServiceMejor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceMejor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
