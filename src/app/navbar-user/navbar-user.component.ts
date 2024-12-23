import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css'],
})
export class NavbarUserComponent {
  isScrolled = false; // Estado de scroll
  readonly HOME_ADMIN_ROUTE = '/home-user'; // Ruta para Home Admin

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 0; // Cambia el estado según el scroll
  }

  navigateTo(route: string): void {
    this.router.navigate([route]); // Redirige a la ruta proporcionada
  }

  navigateToHomeAdmin(): void {
    this.router.navigate([this.HOME_ADMIN_ROUTE]); // Redirige a la ruta /home-admin
  }

  logout(): void {
    // Eliminar el token de sessionStorage
    sessionStorage.removeItem('authToken');
    
    // Si tienes una cookie, la puedes eliminar de la siguiente manera:
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'; // Elimina la cookie
    
    // Mostrar un mensaje de sesión cerrada (esto es opcional)
    alert('Sesión cerrada');
    
    // Redirigir a la página de inicio
    this.router.navigate(['/home']);
  }
}

