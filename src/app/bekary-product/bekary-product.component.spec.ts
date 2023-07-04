import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BekaryProductComponent } from './bekary-product.component';

describe('BekaryProductComponent', () => {
  let component: BekaryProductComponent;
  let fixture: ComponentFixture<BekaryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BekaryProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BekaryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
