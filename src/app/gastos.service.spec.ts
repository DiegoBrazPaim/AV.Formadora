import { TestBed } from '@angular/core/testing';

import { GastosService } from './services/gastos.service';

describe('GastosService', () => {
  let service: GastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
