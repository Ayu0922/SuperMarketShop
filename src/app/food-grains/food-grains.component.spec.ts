import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGrainsComponent } from './food-grains.component';

describe('FoodGrainsComponent', () => {
  let component: FoodGrainsComponent;
  let fixture: ComponentFixture<FoodGrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodGrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodGrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
