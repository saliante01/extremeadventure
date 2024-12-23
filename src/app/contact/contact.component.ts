import { Component } from '@angular/core';
import { HeaderContactComponent } from "../header-contact/header-contact.component";
import { ContactInfoComponent } from "../contact-info/contact-info.component";

@Component({
  selector: 'app-contact',
  imports: [HeaderContactComponent, ContactInfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
