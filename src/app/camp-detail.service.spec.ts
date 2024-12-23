import { TestBed } from '@angular/core/testing';

import { CampDetailService } from './camp-detail.service';

describe('CampDetailService', () => {
  let service: CampDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
