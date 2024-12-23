import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApplicationFormComponent } from './header-application-form.component';

describe('HeaderApplicationFormComponent', () => {
  let component: HeaderApplicationFormComponent;
  let fixture: ComponentFixture<HeaderApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderApplicationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
