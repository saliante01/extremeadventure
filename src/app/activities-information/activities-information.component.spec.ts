import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesInformationComponent } from './activities-information.component';

describe('ActivitiesInformationComponent', () => {
  let component: ActivitiesInformationComponent;
  let fixture: ComponentFixture<ActivitiesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
