import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdInfo2Component } from './id-info2.component';

describe('IdInfo2Component', () => {
  let component: IdInfo2Component;
  let fixture: ComponentFixture<IdInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdInfo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
