import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdduserComponent } from './form-adduser.component';

describe('FormAdduserComponent', () => {
  let component: FormAdduserComponent;
  let fixture: ComponentFixture<FormAdduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAdduserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
