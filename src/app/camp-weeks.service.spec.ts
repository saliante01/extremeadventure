import { TestBed } from '@angular/core/testing';

import { CampWeeksService } from './camp-weeks.service';

describe('CampWeeksService', () => {
  let service: CampWeeksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampWeeksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
