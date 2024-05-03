import { TestBed } from '@angular/core/testing';

import { ApiServiceBaseService } from './api-service-base.service';

describe('ApiServiceBaseService', () => {
  let service: ApiServiceBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
