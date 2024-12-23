import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false; // Determina el estado de scroll de la navbar

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 0; // Cambia el estado según la posición del scroll
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToDatePrice(): void {
    this.router.navigate(['/date-price']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToHeaderQuestions(): void {
    this.router.navigate(['/header-questions']);
  }
  goToAboutUs(): void {
    this.router.navigate(['/header-aboutus']);
  }
  goToHome(): void {
    this.router.navigate(['/home']);
  }
  goToRules() {
    this.router.navigate(['/rules']); // Nueva ruta para "Reglas"
  }
}
