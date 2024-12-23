import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class DecodeService {

  constructor() { }

  decodeToken(token: string): any {
    try {
      const decoded = jwtDecode(token);  // Decodificando el JWT usando jwtDecode
      return decoded;
    } catch (error) {
      console.error('Error decodificando el token', error);
      return null;
    }
  }

  isAdmin(token: string): boolean {
    const decodedToken = this.decodeToken(token);
    return decodedToken && decodedToken.role === 'admin'; // Comprobamos si el role es 'admin'
  }
}
