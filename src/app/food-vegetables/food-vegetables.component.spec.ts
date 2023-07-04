import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodVegetablesComponent } from './food-vegetables.component';

describe('FoodVegetablesComponent', () => {
  let component: FoodVegetablesComponent;
  let fixture: ComponentFixture<FoodVegetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodVegetablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
