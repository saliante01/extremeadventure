import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPatnersComponent } from './our-patners.component';

describe('OurPatnersComponent', () => {
  let component: OurPatnersComponent;
  let fixture: ComponentFixture<OurPatnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPatnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPatnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
