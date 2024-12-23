import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdInfo3inscriptionComponent } from './id-info3inscription.component';

describe('IdInfo3inscriptionComponent', () => {
  let component: IdInfo3inscriptionComponent;
  let fixture: ComponentFixture<IdInfo3inscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdInfo3inscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdInfo3inscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
