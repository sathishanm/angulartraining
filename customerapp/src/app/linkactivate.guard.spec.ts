import { TestBed } from '@angular/core/testing';

import { LinkactivateGuard } from './linkactivate.guard';

describe('LinkactivateGuard', () => {
  let guard: LinkactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LinkactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
