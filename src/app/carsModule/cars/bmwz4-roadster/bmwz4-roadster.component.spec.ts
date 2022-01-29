import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmwz4RoadsterComponent } from './bmwz4-roadster.component';

describe('Bmwz4RoadsterComponent', () => {
  let component: Bmwz4RoadsterComponent;
  let fixture: ComponentFixture<Bmwz4RoadsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bmwz4RoadsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bmwz4RoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
