import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FormAdduserComponent } from "../form-adduser/form-adduser.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header-adduser',
  imports: [NavbarAdminComponent, FormAdduserComponent, FooterComponent],
  templateUrl: './header-adduser.component.html',
  styleUrl: './header-adduser.component.css'
})
export class HeaderAdduserComponent {

}
