import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditWeekComponent } from './form-edit-week.component';

describe('FormEditWeekComponent', () => {
  let component: FormEditWeekComponent;
  let fixture: ComponentFixture<FormEditWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
