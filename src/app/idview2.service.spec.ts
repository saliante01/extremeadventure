import { TestBed } from '@angular/core/testing';

import { Idview2Service } from './idview2.service';

describe('Idview2Service', () => {
  let service: Idview2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Idview2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
