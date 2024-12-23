import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FooterComponent } from "../footer/footer.component";
import { CreateCampsComponent } from "../create-camps/create-camps.component";

@Component({
  selector: 'app-header-camp',
  imports: [NavbarAdminComponent, FooterComponent, CreateCampsComponent],
  templateUrl: './header-camp.component.html',
  styleUrl: './header-camp.component.css'
})
export class HeaderCampComponent {

}
