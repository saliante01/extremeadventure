import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { SummerSchoolInformationComponent } from "../summer-school-information/summer-school-information.component";
import { SummerInformation2Component } from "../summer-information2/summer-information2.component";
import { MisionInformationComponent } from "../mision-information/mision-information.component";
import { IdeaInformationComponent } from "../idea-information/idea-information.component";
import { ActivitiesInformationComponent } from "../activities-information/activities-information.component";
import { AprenderInformacionComponent } from "../aprender-informacion/aprender-informacion.component";
@Component({
  selector: 'app-header-about-us',
  imports: [NavbarComponent, FooterComponent, SummerSchoolInformationComponent, SummerInformation2Component, MisionInformationComponent, IdeaInformationComponent, ActivitiesInformationComponent, AprenderInformacionComponent],
  templateUrl: './header-about-us.component.html',
  styleUrl: './header-about-us.component.css'
})
export class HeaderAboutUsComponent {

}
