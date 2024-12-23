import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRulesComponent } from './tutor-rules.component';

describe('TutorRulesComponent', () => {
  let component: TutorRulesComponent;
  let fixture: ComponentFixture<TutorRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
