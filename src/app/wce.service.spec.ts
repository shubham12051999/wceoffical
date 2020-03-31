import { TestBed } from '@angular/core/testing';

import { WceService } from './wce.service';

describe('WceService', () => {
  let service: WceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
