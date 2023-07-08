import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { libInfoResolver } from './lib-info.resolver';
import { LibInfo } from '../interfaces/docs-info.interface';

describe('libInfoResolver', () => {
  const executeResolver: ResolveFn<LibInfo> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => libInfoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
