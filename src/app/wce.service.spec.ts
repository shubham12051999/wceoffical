import { TestBed } from '@angular/core/testing';

import { WceService } from './wce.service';

describe('WceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WceService = TestBed.get(WceService);
    expect(service).toBeTruthy();
  });
});
