import { TestBed } from '@angular/core/testing';

import { Messagetchat } from './messagetchat';

describe('Messagetchat', () => {
  let service: Messagetchat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Messagetchat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
