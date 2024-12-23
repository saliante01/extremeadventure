import { TestBed } from '@angular/core/testing';

import { WintercampserviceService } from './wintercampservice.service';

describe('WintercampserviceService', () => {
  let service: WintercampserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WintercampserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
