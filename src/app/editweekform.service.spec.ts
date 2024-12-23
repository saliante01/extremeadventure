import { TestBed } from '@angular/core/testing';

import { EditweekformService } from './editweekform.service';

describe('EditweekformService', () => {
  let service: EditweekformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditweekformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
