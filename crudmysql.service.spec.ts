import { TestBed } from '@angular/core/testing';

import { CrudmysqlService } from './crudmysql.service';

describe('CrudmysqlService', () => {
  let service: CrudmysqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudmysqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
