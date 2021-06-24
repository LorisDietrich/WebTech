import { TestBed } from '@angular/core/testing';

import { PersonnallistService } from './personnallist.service';

describe('PersonnallistService', () => {
  let service: PersonnallistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnallistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
