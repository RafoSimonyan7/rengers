import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRengersComponent } from './add-rengers.component';

describe('AddRengersComponent', () => {
  let component: AddRengersComponent;
  let fixture: ComponentFixture<AddRengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRengersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
