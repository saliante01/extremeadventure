import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActivitiesComponent } from './header-activities.component';

describe('HeaderActivitiesComponent', () => {
  let component: HeaderActivitiesComponent;
  let fixture: ComponentFixture<HeaderActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
