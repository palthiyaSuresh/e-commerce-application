import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtmRc200Component } from './ktm-rc200.component';

describe('KtmRc200Component', () => {
  let component: KtmRc200Component;
  let fixture: ComponentFixture<KtmRc200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KtmRc200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KtmRc200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
