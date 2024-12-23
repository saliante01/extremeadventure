import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWeeksComponent } from './header-weeks.component';

describe('HeaderWeeksComponent', () => {
  let component: HeaderWeeksComponent;
  let fixture: ComponentFixture<HeaderWeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWeeksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
