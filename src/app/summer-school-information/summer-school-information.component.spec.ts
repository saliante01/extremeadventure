import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerSchoolInformationComponent } from './summer-school-information.component';

describe('SummerSchoolInformationComponent', () => {
  let component: SummerSchoolInformationComponent;
  let fixture: ComponentFixture<SummerSchoolInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerSchoolInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerSchoolInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
