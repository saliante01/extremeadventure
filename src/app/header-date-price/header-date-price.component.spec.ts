import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDatePriceComponent } from './header-date-price.component';

describe('HeaderDatePriceComponent', () => {
  let component: HeaderDatePriceComponent;
  let fixture: ComponentFixture<HeaderDatePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDatePriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
