import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwx7Component } from './bmwx7.component';

describe('Bmwx7Component', () => {
  let component: Bmwx7Component;
  let fixture: ComponentFixture<Bmwx7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bmwx7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bmwx7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
