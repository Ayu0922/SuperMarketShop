import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodVegiesComponent } from './add-food-vegies.component';

describe('AddFoodVegiesComponent', () => {
  let component: AddFoodVegiesComponent;
  let fixture: ComponentFixture<AddFoodVegiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodVegiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodVegiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
