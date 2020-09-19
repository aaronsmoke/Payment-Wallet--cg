import { TestBed } from '@angular/core/testing';

import { WalletaccountService } from './walletaccount.service';

describe('WalletaccountService', () => {
  let service: WalletaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
