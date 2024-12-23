import { Component } from '@angular/core';
import { NavbarUserComponent } from "../navbar-user/navbar-user.component";
import { FooterComponent } from "../footer/footer.component";
import { MyCoursesComponent } from "../my-courses/my-courses.component";

@Component({
  selector: 'app-header-courses-user',
  imports: [NavbarUserComponent, FooterComponent, MyCoursesComponent],
  templateUrl: './header-courses-user.component.html',
  styleUrl: './header-courses-user.component.css'
})
export class HeaderCoursesUserComponent {

}
