import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMaruthiComponent } from './general-maruthi.component';

describe('GeneralMaruthiComponent', () => {
  let component: GeneralMaruthiComponent;
  let fixture: ComponentFixture<GeneralMaruthiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMaruthiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMaruthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
