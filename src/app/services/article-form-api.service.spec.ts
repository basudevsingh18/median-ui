import { TestBed } from '@angular/core/testing';

import { ArticleFormAPIService } from './article-form-api.service';

describe('ArticleFormAPIService', () => {
  let service: ArticleFormAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleFormAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
