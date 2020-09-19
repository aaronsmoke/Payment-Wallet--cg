import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatewalletaccountComponent } from './createwalletaccount.component';

describe('CreatewalletaccountComponent', () => {
  let component: CreatewalletaccountComponent;
  let fixture: ComponentFixture<CreatewalletaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatewalletaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatewalletaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
