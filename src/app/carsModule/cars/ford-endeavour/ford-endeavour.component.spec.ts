import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordEndeavourComponent } from './ford-endeavour.component';

describe('FordEndeavourComponent', () => {
  let component: FordEndeavourComponent;
  let fixture: ComponentFixture<FordEndeavourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FordEndeavourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FordEndeavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
