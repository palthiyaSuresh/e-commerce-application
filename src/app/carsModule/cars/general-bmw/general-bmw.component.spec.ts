import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBmwComponent } from './general-bmw.component';

describe('GeneralBmwComponent', () => {
  let component: GeneralBmwComponent;
  let fixture: ComponentFixture<GeneralBmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralBmwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralBmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
