import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFordComponent } from './general-ford.component';

describe('GeneralFordComponent', () => {
  let component: GeneralFordComponent;
  let fixture: ComponentFixture<GeneralFordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralFordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
