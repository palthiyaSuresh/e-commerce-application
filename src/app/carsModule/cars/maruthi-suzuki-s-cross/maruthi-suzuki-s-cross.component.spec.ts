import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaruthiSuzukiSCrossComponent } from './maruthi-suzuki-s-cross.component';

describe('MaruthiSuzukiSCrossComponent', () => {
  let component: MaruthiSuzukiSCrossComponent;
  let fixture: ComponentFixture<MaruthiSuzukiSCrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaruthiSuzukiSCrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaruthiSuzukiSCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
