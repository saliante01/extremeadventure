import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampsComponent } from './create-camps.component';

describe('CreateCampsComponent', () => {
  let component: CreateCampsComponent;
  let fixture: ComponentFixture<CreateCampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCampsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
