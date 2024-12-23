import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelEditComponent } from './admin-panel-edit.component';

describe('AdminPanelEditComponent', () => {
  let component: AdminPanelEditComponent;
  let fixture: ComponentFixture<AdminPanelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPanelEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
