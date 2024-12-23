import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificRulesComponent } from './especific-rules.component';

describe('EspecificRulesComponent', () => {
  let component: EspecificRulesComponent;
  let fixture: ComponentFixture<EspecificRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecificRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
