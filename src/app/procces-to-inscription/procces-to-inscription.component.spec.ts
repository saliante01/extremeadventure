import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccesToInscriptionComponent } from './procces-to-inscription.component';

describe('ProccesToInscriptionComponent', () => {
  let component: ProccesToInscriptionComponent;
  let fixture: ComponentFixture<ProccesToInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProccesToInscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProccesToInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
