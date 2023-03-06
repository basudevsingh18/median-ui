import { TestBed } from '@angular/core/testing';

import { AuthorAPIService } from './author-api.service';

describe('AuthorAPIService', () => {
  let service: AuthorAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
