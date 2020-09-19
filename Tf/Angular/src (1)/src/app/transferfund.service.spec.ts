import { TestBed } from '@angular/core/testing';

import { TransferFundService } from './transferfund.service';

describe('TransferfundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferFundService = TestBed.get(TransferFundService);
    expect(service).toBeTruthy();
  });
});
