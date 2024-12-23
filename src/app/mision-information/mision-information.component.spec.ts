import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionInformationComponent } from './mision-information.component';

describe('MisionInformationComponent', () => {
  let component: MisionInformationComponent;
  let fixture: ComponentFixture<MisionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisionInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
