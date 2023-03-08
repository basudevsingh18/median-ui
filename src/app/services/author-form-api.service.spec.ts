import { TestBed } from '@angular/core/testing';

import { AuthorFormAPIService } from './author-form-api.service';

describe('AuthorFormAPIService', () => {
  let service: AuthorFormAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorFormAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
