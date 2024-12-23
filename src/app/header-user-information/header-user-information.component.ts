import { Component } from '@angular/core';
import { UserPanelComponent } from "../user-panel/user-panel.component";
import { NavbarUserComponent } from "../navbar-user/navbar-user.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header-user-information',
  imports: [UserPanelComponent, NavbarUserComponent, FooterComponent],
  templateUrl: './header-user-information.component.html',
  styleUrl: './header-user-information.component.css'
})
export class HeaderUserInformationComponent {

}
