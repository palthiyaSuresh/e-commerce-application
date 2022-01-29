import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaruthiSuzukiComponent } from './maruthi-suzuki.component';

describe('MaruthiSuzukiComponent', () => {
  let component: MaruthiSuzukiComponent;
  let fixture: ComponentFixture<MaruthiSuzukiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaruthiSuzukiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaruthiSuzukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
