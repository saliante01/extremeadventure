import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCampComponent } from './header-camp.component';

describe('HeaderCampComponent', () => {
  let component: HeaderCampComponent;
  let fixture: ComponentFixture<HeaderCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
