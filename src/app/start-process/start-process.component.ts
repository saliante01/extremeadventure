import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-start-process',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './start-process.component.html',
  styleUrls: ['./start-process.component.css'],
})
export class StartProcessComponent {
  termsAccepted = false;

  constructor(private router: Router) {}

  navigateToRegistration() {
    this.router.navigate(['/application-form']); // Redirige a la página de inscripción
  }
}
