import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProccesToInscriptionComponent } from "../procces-to-inscription/procces-to-inscription.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-header-questions',
  imports: [NavbarComponent, ProccesToInscriptionComponent, FooterComponent],
  templateUrl: './header-questions.component.html',
  styleUrl: './header-questions.component.css'
})
export class HeaderQuestionsComponent {

}
