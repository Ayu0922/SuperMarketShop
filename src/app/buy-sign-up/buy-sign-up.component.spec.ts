import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySignUpComponent } from './buy-sign-up.component';

describe('BuySignUpComponent', () => {
  let component: BuySignUpComponent;
  let fixture: ComponentFixture<BuySignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
