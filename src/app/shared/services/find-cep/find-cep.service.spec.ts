import { TestBed, inject } from '@angular/core/testing';

import { FindCepService } from './find-cep.service';

describe('FindCepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindCepService]
    });
  });

  it('should be created', inject([FindCepService], (service: FindCepService) => {
    expect(service).toBeTruthy();
  }));
});
