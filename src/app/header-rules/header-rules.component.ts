import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GeneralRulesComponent } from "../general-rules/general-rules.component";
import { EspecificRulesComponent } from "../especific-rules/especific-rules.component";
import { TutorRulesComponent } from '../tutor-rules/tutor-rules.component';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-header-rules',
  imports: [NavbarComponent, GeneralRulesComponent, EspecificRulesComponent, TutorRulesComponent, FooterComponent],
  templateUrl: './header-rules.component.html',
  styleUrl: './header-rules.component.css'
})
export class HeaderRulesComponent {

}
