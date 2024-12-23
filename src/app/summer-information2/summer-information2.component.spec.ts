import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerInformation2Component } from './summer-information2.component';

describe('SummerInformation2Component', () => {
  let component: SummerInformation2Component;
  let fixture: ComponentFixture<SummerInformation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerInformation2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerInformation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
