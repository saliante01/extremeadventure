import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetailCampsComponent } from './header-detail-camps.component';

describe('HeaderDetailCampsComponent', () => {
  let component: HeaderDetailCampsComponent;
  let fixture: ComponentFixture<HeaderDetailCampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDetailCampsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDetailCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
