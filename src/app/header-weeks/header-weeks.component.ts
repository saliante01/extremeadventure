import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FooterComponent } from "../footer/footer.component";
import { CreateWeeksComponent } from "../create-weeks/create-weeks.component";
import { IdInfo2Component } from "../id-info2/id-info2.component";
import { FormEditWeekComponent } from "../form-edit-week/form-edit-week.component";

@Component({
  selector: 'app-header-weeks',
  imports: [NavbarAdminComponent, FooterComponent, CreateWeeksComponent, IdInfo2Component, FormEditWeekComponent],
  templateUrl: './header-weeks.component.html',
  styleUrl: './header-weeks.component.css'
})
export class HeaderWeeksComponent {

}
