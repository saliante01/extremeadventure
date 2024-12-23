import { TestBed } from '@angular/core/testing';

import { EditInfocampService } from './edit-infocamp.service';

describe('EditInfocampService', () => {
  let service: EditInfocampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditInfocampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
