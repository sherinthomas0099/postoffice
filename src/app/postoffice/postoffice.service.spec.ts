import { TestBed } from '@angular/core/testing';

import { PostofficeService } from './postoffice.service';

describe('PostofficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostofficeService = TestBed.get(PostofficeService);
    expect(service).toBeTruthy();
  });
});
