import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepToRegisterComponent } from './step-to-register.component';

describe('StepToRegisterComponent', () => {
  let component: StepToRegisterComponent;
  let fixture: ComponentFixture<StepToRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepToRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepToRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
