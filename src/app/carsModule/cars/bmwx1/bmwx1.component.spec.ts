import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwx1Component } from './bmwx1.component';

describe('Bmwx1Component', () => {
  let component: Bmwx1Component;
  let fixture: ComponentFixture<Bmwx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bmwx1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bmwx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
