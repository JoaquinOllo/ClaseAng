import { TestBed } from '@angular/core/testing';

import { PeliculaServiceTest } from './pelicula-service-test.service';

describe('PeliculaServiceTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculaServiceTest = TestBed.get(PeliculaServiceTest);
    expect(service).toBeTruthy();
  });
});
