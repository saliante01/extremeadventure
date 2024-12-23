import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserInformationComponent } from './header-user-information.component';

describe('HeaderUserInformationComponent', () => {
  let component: HeaderUserInformationComponent;
  let fixture: ComponentFixture<HeaderUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUserInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
