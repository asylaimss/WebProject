import { TestBed } from '@angular/core/testing';

import { ServiceLentaService } from './service-lenta.service';

describe('ServiceLentaService', () => {
  let service: ServiceLentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
