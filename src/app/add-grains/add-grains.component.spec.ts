import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrainsComponent } from './add-grains.component';

describe('AddGrainsComponent', () => {
  let component: AddGrainsComponent;
  let fixture: ComponentFixture<AddGrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
