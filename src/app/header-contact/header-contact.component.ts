import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-contact',
  standalone:true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './header-contact.component.html',
  styleUrl: './header-contact.component.css'
})
export class HeaderContactComponent {

}
