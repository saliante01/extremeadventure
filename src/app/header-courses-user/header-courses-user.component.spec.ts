import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCoursesUserComponent } from './header-courses-user.component';

describe('HeaderCoursesUserComponent', () => {
  let component: HeaderCoursesUserComponent;
  let fixture: ComponentFixture<HeaderCoursesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCoursesUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCoursesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
