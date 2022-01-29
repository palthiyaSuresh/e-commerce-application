import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCarsComponent } from './general-cars.component';

describe('GeneralCarsComponent', () => {
  let component: GeneralCarsComponent;
  let fixture: ComponentFixture<GeneralCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
