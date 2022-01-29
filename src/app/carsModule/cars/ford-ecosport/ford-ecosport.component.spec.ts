import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordEcosportComponent } from './ford-ecosport.component';

describe('FordEcosportComponent', () => {
  let component: FordEcosportComponent;
  let fixture: ComponentFixture<FordEcosportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FordEcosportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FordEcosportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
