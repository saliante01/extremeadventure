import { Component } from '@angular/core';
import { SummerCampsAdminComponent } from '../summer-camps-admin/summer-camps-admin.component';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-header-summer-camp-admin',
  imports: [SummerCampsAdminComponent, NavbarAdminComponent, FooterComponent],
  templateUrl: './header-summer-camp-admin.component.html',
  styleUrl: './header-summer-camp-admin.component.css'
})
export class HeaderSummerCampAdminComponent {

}
