import { TestBed } from '@angular/core/testing';

import { ForProductsService } from './for-products.service';

describe('ForProductsService', () => {
  let service: ForProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
