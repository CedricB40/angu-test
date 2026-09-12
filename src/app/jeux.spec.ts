import { TestBed } from '@angular/core/testing';

import { Jeux } from './jeux';

describe('Jeux', () => {
  let service: Jeux;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jeux);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
