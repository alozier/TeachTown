import { TestBed } from '@angular/core/testing';

import { LaunchTableExpandService } from './launch-table-expand.service';

describe('LaunchExpandTableService', () => {
  let service: LaunchTableExpandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchTableExpandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
