import { TestBed } from '@angular/core/testing';

import { Idview3Service } from './idview3.service';

describe('Idview3Service', () => {
  let service: Idview3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Idview3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
