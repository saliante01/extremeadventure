import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeService } from './decode.service'; // Importar el servicio DecodeService// O el servicio que maneje la autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private decodeService: DecodeService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const token = sessionStorage.getItem('authToken'); // O como se esté guardando el token
    if (!token) {
      this.router.navigate(['/login']); // Redirigir si no hay token
      return false;
    }

    // Decodificar el token y obtener el rol
    const decodedToken = this.decodeService.decodeToken(token);
    const requiredRole = route.data['role']; // Obtener el rol requerido desde la ruta

    if (decodedToken && decodedToken.role === requiredRole) {
      return true; // El rol es válido, permitir acceso
    }

    // Si el rol no coincide, redirigir a una página de acceso denegado o inicio
    this.router.navigate(['/home']);
    return false;
  }
}
