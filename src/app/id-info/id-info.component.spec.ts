import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdInfoComponent } from './id-info.component';

describe('IdInfoComponent', () => {
  let component: IdInfoComponent;
  let fixture: ComponentFixture<IdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
