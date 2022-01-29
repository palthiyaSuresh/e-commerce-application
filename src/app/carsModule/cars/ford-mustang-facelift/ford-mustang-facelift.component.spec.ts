import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordMustangFaceliftComponent } from './ford-mustang-facelift.component';

describe('FordMustangFaceliftComponent', () => {
  let component: FordMustangFaceliftComponent;
  let fixture: ComponentFixture<FordMustangFaceliftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FordMustangFaceliftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FordMustangFaceliftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
