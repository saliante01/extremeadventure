import { TestBed } from '@angular/core/testing';

import { CreateCampService } from './create-camp.service';

describe('CreateCampService', () => {
  let service: CreateCampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
