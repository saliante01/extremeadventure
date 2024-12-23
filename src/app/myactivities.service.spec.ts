import { TestBed } from '@angular/core/testing';

import { MyactivitiesService } from './myactivities.service';

describe('MyactivitiesService', () => {
  let service: MyactivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyactivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
