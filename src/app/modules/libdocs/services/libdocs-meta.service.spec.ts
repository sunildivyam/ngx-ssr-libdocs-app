import { TestBed } from '@angular/core/testing';

import { LibdocsMetaService } from './libdocs-meta.service';

describe('LibdocsMetaService', () => {
  let service: LibdocsMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibdocsMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
