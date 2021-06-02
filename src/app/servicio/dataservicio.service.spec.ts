import { TestBed } from '@angular/core/testing';

import { DataservicioService } from './dataservicio.service';

describe('DataservicioService', () => {
  let service: DataservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
