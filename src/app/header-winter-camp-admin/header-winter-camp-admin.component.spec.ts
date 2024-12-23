import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWinterCampAdminComponent } from './header-winter-camp-admin.component';

describe('HeaderWinterCampAdminComponent', () => {
  let component: HeaderWinterCampAdminComponent;
  let fixture: ComponentFixture<HeaderWinterCampAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWinterCampAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWinterCampAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
