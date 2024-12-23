import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';
import { AdminPanelComponent } from "../admin-panel/admin-panel.component";

@Component({
  selector: 'app-home-admin',
  imports: [NavbarAdminComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}
