import { TestBed } from '@angular/core/testing';

import { FeatureImageService } from './feature-image.service';

describe('FeatureImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureImageService = TestBed.get(FeatureImageService);
    expect(service).toBeTruthy();
  });
});
