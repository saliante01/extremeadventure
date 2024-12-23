import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderInformacionComponent } from './aprender-informacion.component';

describe('AprenderInformacionComponent', () => {
  let component: AprenderInformacionComponent;
  let fixture: ComponentFixture<AprenderInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprenderInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprenderInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
