import { TestBed } from '@angular/core/testing';

import { InfoTedServiceService } from './info-ted-service';

describe('InfoTedServiceService', () => {
  let service: InfoTedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoTedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
