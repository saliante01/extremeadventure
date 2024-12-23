import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEditCampComponent } from './header-edit-camp.component';

describe('HeaderEditCampComponent', () => {
  let component: HeaderEditCampComponent;
  let fixture: ComponentFixture<HeaderEditCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEditCampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEditCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
