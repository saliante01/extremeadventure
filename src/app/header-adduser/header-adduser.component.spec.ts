import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdduserComponent } from './header-adduser.component';

describe('HeaderAdduserComponent', () => {
  let component: HeaderAdduserComponent;
  let fixture: ComponentFixture<HeaderAdduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAdduserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
