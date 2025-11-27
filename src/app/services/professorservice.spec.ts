import { TestBed } from '@angular/core/testing';

import { Professorservice } from './professorservice';

describe('Professorservice', () => {
  let service: Professorservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Professorservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
