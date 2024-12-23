import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderQuestionsComponent } from './header-questions.component';

describe('HeaderQuestionsComponent', () => {
  let component: HeaderQuestionsComponent;
  let fixture: ComponentFixture<HeaderQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
