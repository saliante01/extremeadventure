import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMoreCampsComponent } from './about-more-camps.component';

describe('AboutMoreCampsComponent', () => {
  let component: AboutMoreCampsComponent;
  let fixture: ComponentFixture<AboutMoreCampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMoreCampsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMoreCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
