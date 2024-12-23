import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfocampComponent } from './edit-infocamp.component';

describe('EditInfocampComponent', () => {
  let component: EditInfocampComponent;
  let fixture: ComponentFixture<EditInfocampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInfocampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInfocampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
