import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeeksComponent } from './create-weeks.component';

describe('CreateWeeksComponent', () => {
  let component: CreateWeeksComponent;
  let fixture: ComponentFixture<CreateWeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWeeksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
