import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummercampDatepriceComponent } from './summercamp-dateprice.component';

describe('SummercampDatepriceComponent', () => {
  let component: SummercampDatepriceComponent;
  let fixture: ComponentFixture<SummercampDatepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummercampDatepriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummercampDatepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
