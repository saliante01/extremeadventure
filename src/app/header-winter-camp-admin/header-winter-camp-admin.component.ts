import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header-winter-camp-admin',
  imports: [NavbarAdminComponent,FooterComponent],
  templateUrl: './header-winter-camp-admin.component.html',
  styleUrl: './header-winter-camp-admin.component.css'
})
export class HeaderWinterCampAdminComponent {

}
