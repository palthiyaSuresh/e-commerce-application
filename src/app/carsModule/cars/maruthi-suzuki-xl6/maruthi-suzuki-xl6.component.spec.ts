import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaruthiSuzukiXl6Component } from './maruthi-suzuki-xl6.component';

describe('MaruthiSuzukiXl6Component', () => {
  let component: MaruthiSuzukiXl6Component;
  let fixture: ComponentFixture<MaruthiSuzukiXl6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaruthiSuzukiXl6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaruthiSuzukiXl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
