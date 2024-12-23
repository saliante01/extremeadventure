import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsScheduleComponent } from './forms-schedule.component';

describe('FormsScheduleComponent', () => {
  let component: FormsScheduleComponent;
  let fixture: ComponentFixture<FormsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
