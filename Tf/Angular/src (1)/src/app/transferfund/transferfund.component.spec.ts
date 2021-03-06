import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFundComponent } from './transferfund.component';

describe('TransferfundComponent', () => {
  let component: TransferFundComponent;
  let fixture: ComponentFixture<TransferFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
