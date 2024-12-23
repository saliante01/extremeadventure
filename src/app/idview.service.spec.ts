import { TestBed } from '@angular/core/testing';

import { IdviewService } from './idview.service';

describe('IdviewService', () => {
  let service: IdviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
