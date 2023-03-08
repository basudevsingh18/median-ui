import { TestBed } from '@angular/core/testing';

import { ArticleAPIService } from './article-api.service';

describe('ArticleAPIService', () => {
  let service: ArticleAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
