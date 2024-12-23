import { Component } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home-user',
  imports: [NavbarUserComponent,FooterComponent],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent {

}
