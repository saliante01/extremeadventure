import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCampsAdminComponent } from './summer-camps-admin.component';

describe('SummerCampsAdminComponent', () => {
  let component: SummerCampsAdminComponent;
  let fixture: ComponentFixture<SummerCampsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerCampsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerCampsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
