import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBunCakeComponent } from './add-bun-cake.component';

describe('AddBunCakeComponent', () => {
  let component: AddBunCakeComponent;
  let fixture: ComponentFixture<AddBunCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBunCakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBunCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
