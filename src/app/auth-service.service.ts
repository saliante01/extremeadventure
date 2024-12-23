// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // Método para obtener el JWT de sessionStorage
  getToken(): string | null {
    return sessionStorage.getItem('authToken'); // Cambiado a sessionStorage
  }

  // Método para verificar si el JWT aún es válido
  isTokenValid(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      if (decodedToken && decodedToken.exp) {
        const currentTime = Math.floor(Date.now() / 1000); // Obtén el tiempo actual en segundos
        return decodedToken.exp > currentTime;
      }
    }
    return false;
  }

  // Método para decodificar el JWT y obtener su payload
  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload)); // Decodifica el JWT
  }
}
