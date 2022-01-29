import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaruthiSuzukiSwiftComponent } from './maruthi-suzuki-swift.component';

describe('MaruthiSuzukiSwiftComponent', () => {
  let component: MaruthiSuzukiSwiftComponent;
  let fixture: ComponentFixture<MaruthiSuzukiSwiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaruthiSuzukiSwiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaruthiSuzukiSwiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
