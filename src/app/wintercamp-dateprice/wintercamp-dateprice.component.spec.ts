import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WintercampDatepriceComponent } from './wintercamp-dateprice.component';

describe('WintercampDatepriceComponent', () => {
  let component: WintercampDatepriceComponent;
  let fixture: ComponentFixture<WintercampDatepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WintercampDatepriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WintercampDatepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
