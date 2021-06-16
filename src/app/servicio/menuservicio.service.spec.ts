import { TestBed } from '@angular/core/testing';

import { MenuservicioService } from './menuservicio.service';

describe('MenuservicioService', () => {
  let service: MenuservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
