import { TestBed } from '@angular/core/testing';

import { CamaracapacitorService } from './camaracapacitor.service';

describe('CamaracapacitorService', () => {
  let service: CamaracapacitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamaracapacitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
