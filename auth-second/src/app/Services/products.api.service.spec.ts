import { TestBed, inject } from '@angular/core/testing';

import { Products.ApiService } from './products.api.service';

describe('Products.ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Products.ApiService]
    });
  });

  it('should be created', inject([Products.ApiService], (service: Products.ApiService) => {
    expect(service).toBeTruthy();
  }));
});
