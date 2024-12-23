import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaInformationComponent } from './idea-information.component';

describe('IdeaInformationComponent', () => {
  let component: IdeaInformationComponent;
  let fixture: ComponentFixture<IdeaInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
