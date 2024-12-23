import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FooterComponent } from "../footer/footer.component";
import { CreateActivitiesComponent } from "../create-activities/create-activities.component";
import { MyActivitiesComponent } from "../my-activities/my-activities.component";
import { IdInfoComponent } from "../id-info/id-info.component";
import { FormsScheduleComponent } from "../forms-schedule/forms-schedule.component";

@Component({
  selector: 'app-header-activities',
  imports: [NavbarAdminComponent, FooterComponent, CreateActivitiesComponent, MyActivitiesComponent, IdInfoComponent, FormsScheduleComponent],
  templateUrl: './header-activities.component.html',
  styleUrl: './header-activities.component.css'
})
export class HeaderActivitiesComponent {

}
