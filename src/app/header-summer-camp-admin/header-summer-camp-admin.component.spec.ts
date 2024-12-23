import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSummerCampAdminComponent } from './header-summer-camp-admin.component';

describe('HeaderSummerCampAdminComponent', () => {
  let component: HeaderSummerCampAdminComponent;
  let fixture: ComponentFixture<HeaderSummerCampAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSummerCampAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSummerCampAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
